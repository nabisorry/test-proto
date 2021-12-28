// package: jobs
// file: pii.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as pii_pb from "./pii_pb";

interface IGrpcStreamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    stream: IGrpcStreamService_Istream;
}

interface IGrpcStreamService_Istream extends grpc.MethodDefinition<pii_pb.ClinentMessage, pii_pb.ServerMessage> {
    path: "/jobs.GrpcStream/stream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<pii_pb.ClinentMessage>;
    requestDeserialize: grpc.deserialize<pii_pb.ClinentMessage>;
    responseSerialize: grpc.serialize<pii_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<pii_pb.ServerMessage>;
}

export const GrpcStreamService: IGrpcStreamService;

export interface IGrpcStreamServer {
    stream: grpc.handleBidiStreamingCall<pii_pb.ClinentMessage, pii_pb.ServerMessage>;
}

export interface IGrpcStreamClient {
    stream(): grpc.ClientDuplexStream<pii_pb.ClinentMessage, pii_pb.ServerMessage>;
    stream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pii_pb.ClinentMessage, pii_pb.ServerMessage>;
    stream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pii_pb.ClinentMessage, pii_pb.ServerMessage>;
}

export class GrpcStreamClient extends grpc.Client implements IGrpcStreamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public stream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pii_pb.ClinentMessage, pii_pb.ServerMessage>;
    public stream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pii_pb.ClinentMessage, pii_pb.ServerMessage>;
}
