
"use client";
import React, { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState, useEdgesState, addEdge,
    Node, NodeToolbar, NodeResizer
} from 'reactflow';
import 'reactflow/dist/style.css';
export const runtime = 'edge' // 'nodejs' (default) | 'edge'

const initialNodes = [
    {
        id: '1',
        position: {
            x: 0, y: 0
        },
        data: { label: 'Node 1' }
    },
    {
        id: '2',
        position: {
            x: 0, y: 100
        },
        data: { label: 'Node 2' }
    },
];
const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2'
    }
];

let id = 0;
const getId = () => `d${id++}`;

function ReactFlowPage() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect =
        useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
    const onAdd = () => {
        setNodes((els) =>
            els.concat([
                {
                    id: getId(),
                    data: { label: 'New Node' },
                    position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
                },
            ])
        );
    };
    return (
        <div>
            <h2>Sample is here.</h2>
            <button onClick={onAdd}>Add node</button>

            <div style={{ width: '100vw', height: '100vh' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                >
                    {nodes.map((node) => (
                        <div key={node.id}>
                            <NodeToolbar nodeId={node.id} />
                            <NodeResizer nodeId={node.id} />
                        </div>
                    ))}
                    <Controls />
                    <MiniMap />
                    <Background />
                    <NodeToolbar />
                    <NodeResizer />

                </ReactFlow>
            </div>
        </div>
    )
}

export default ReactFlowPage