
"use client";
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

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

function ReactFlowPage() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect =
        useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div>ReactFlowPage
            <h2>Sample is here.</h2>
            <div style={{ width: '100vw', height: '100vh' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                />
            </div>
        </div>
    )
}

export default ReactFlowPage