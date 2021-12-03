import React from "react";
import { useGetData } from "../custom-hooks/useGetData";
import Update from './Update';
import Delete from "./Delete";

const FireStoreData = () => {

    const [documents] = useGetData();

        return (
            <div style={valueStyle}>
                <span>Values</span>
                {documents.map((documents) => (
                    <div key={documents.id}>
                        <div style={valueStyle}>
                            Document: {documents.id} Value: {documents.value.value}
                        </div>
                        <Update doc={documents.id} />
                        <Delete doc={documents.id} />
                    </div>
                ))}
            </div>
        );
    };

export default FireStoreData;