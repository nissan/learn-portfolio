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
            x: 150,
            y: 50
        },
        data: { label: "Node 1" }
    },
    {
        id: "2",
        position: {
            x: 50,
            y: 300
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Sample portfolio of things I built learning about Reactflow&nbsp;
                </p>


                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                    <ReactFlowProvider>
                        <div style={{ width: '100vw', height: '100vh' }}>
                            <ReactFlow
                                nodes={nodes}
                                edges={edges}
                                onNodesChange={onNodesChange}
                                onEdgesChange={onEdgesChange}
                                onConnect={onConnect}
                                minZoom={0.2}
                                maxZoom={4}
                                fitView={false}
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
                </div>

            </div>
        </main>

    )
}

export default ReactFlowPage
