/* eslint-disable @typescript-eslint/no-unused-vars */
import * as grpc from '@grpc/grpc-js';
import { handleBidiStreamingCall } from '@grpc/grpc-js';
import { IGrpcStreamServer } from 'src/proto/pii_grpc_pb';
import { ClinentMessage, ServerMessage } from 'src/proto/pii_pb';

class PIIServer implements IGrpcStreamServer {
    stream(call: grpc.ServerDuplexStream<ClinentMessage, ServerMessage>): void {
        throw 'override!';
    }
}

export default PIIServer;
