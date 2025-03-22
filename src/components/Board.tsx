import React from "react";
import Box from "./Box";
import {useStore} from '../kernel/state';

const Board = () => {
    const nodes = useStore((state) => state.nodes);

    return (
        <div style={{width: "100vw", height: "100vh", position: "relative", background: "#222"}}>
            {nodes.map((node) => (
                <Box key={node.id} name={node.name} position={node.position}/>
            ))}
        </div>
    );
};

export default Board;
