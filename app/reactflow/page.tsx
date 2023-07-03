"use client";
import React, { useCallback } from "react";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Node,
    NodeToolbar,
    NodeResizer, NodeResizeControl,
    ReactFlowProvider
} from "reactflow";
import "reactflow/dist/style.css";
export const runtime = "edge"; // "nodejs" (default) | "edge"

const initialNodes = [
    {
        id: "1",
        position: {
            x: 0,
            y: 0
        },
        data: { label: "Node 1" }
    },
    {
        id: "2",
        position: {
            x: 0,
            y: 100
        },
        data: { label: "Node 2" }
    },
];
const initialEdges = [
    {
        id: "e1-2",
        source: "1",
        target: "2"
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
                    data: { label: "New Node" },
                    position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
                },
            ])
        );
    };
    return (
        <ReactFlowProvider>
            <h2>Sample is here.</h2>

            <div style={{ width: '100vw', height: '100vh' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    minZoom={0.2}
                    maxZoom={4}
                    fitView={true}
                >
                    {nodes.map((node) => (
                        <>
                            <NodeToolbar
                                nodeId={node.id}
                            >
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 border border-blue-700" onClick={onAdd}>Add node</button>

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 border border-blue-700">Save</button>{' '}
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 border border-blue-700">Delete</button>
                            </NodeToolbar>
                            <NodeResizer nodeId={node.id} isVisible={true} />
                        </>
                    ))}
                    <Controls />
                    <MiniMap />
                    <Background />
                </ReactFlow>
            </div>
        </ReactFlowProvider>
    )
}

export default ReactFlowPage
