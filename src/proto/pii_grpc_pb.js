// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var pii_pb = require('./pii_pb.js');

function serialize_jobs_ClinentMessage(arg) {
  if (!(arg instanceof pii_pb.ClinentMessage)) {
    throw new Error('Expected argument of type jobs.ClinentMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_jobs_ClinentMessage(buffer_arg) {
  return pii_pb.ClinentMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jobs_ServerMessage(arg) {
  if (!(arg instanceof pii_pb.ServerMessage)) {
    throw new Error('Expected argument of type jobs.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_jobs_ServerMessage(buffer_arg) {
  return pii_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var GrpcStreamService = exports.GrpcStreamService = {
  // 양방향 스트림 
stream: {
    path: '/jobs.GrpcStream/stream',
    requestStream: true,
    responseStream: true,
    requestType: pii_pb.ClinentMessage,
    responseType: pii_pb.ServerMessage,
    requestSerialize: serialize_jobs_ClinentMessage,
    requestDeserialize: deserialize_jobs_ClinentMessage,
    responseSerialize: serialize_jobs_ServerMessage,
    responseDeserialize: deserialize_jobs_ServerMessage,
  },
};

exports.GrpcStreamClient = grpc.makeGenericClientConstructor(GrpcStreamService);
