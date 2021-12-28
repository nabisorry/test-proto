// package: jobs
// file: pii.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ClinentMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ClinentMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClinentMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ClinentMessage): ClinentMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClinentMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClinentMessage;
    static deserializeBinaryFromReader(message: ClinentMessage, reader: jspb.BinaryReader): ClinentMessage;
}

export namespace ClinentMessage {
    export type AsObject = {
        message: string,
    }
}

export class ServerMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ServerMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ServerMessage): ServerMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerMessage;
    static deserializeBinaryFromReader(message: ServerMessage, reader: jspb.BinaryReader): ServerMessage;
}

export namespace ServerMessage {
    export type AsObject = {
        message: string,
    }
}
