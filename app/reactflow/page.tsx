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
import ColorWheel from "./color-wheel";
import { MdCreate, MdDelete, MdSearch, MdUpdate, MdVisibility } from "react-icons/md";
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
                    position: { x: 100, y: 100 },
                },
            ])
        );
    };

    const operations = [
        { name: 'create', icon: <MdCreate size={24} />, action: onAdd },
        { name: 'read', icon: <MdVisibility size={24} /> },
        { name: 'update', icon: <MdUpdate size={24} /> },
        { name: 'delete', icon: <MdDelete size={24} /> },
        { name: 'search', icon: <MdSearch size={24} /> },
    ];
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
                                <ColorWheel
                                    operations={operations}
                                />
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
