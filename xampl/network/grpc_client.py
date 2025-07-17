import logging

import grpc
import grpc_pb2
import grpc_pb2_grpc


logging.basicConfig(level=logging.INFO)


def main():
    # call remote procedure
    with grpc.insecure_channel("localhost:50051") as channel:
        stub = grpc_pb2_grpc.MessageEchoStub(channel)

        # Unary Request -- Unary Response
        request = grpc_pb2.ClientRequest(message="you are the best")
        logging.info("Client sent: %s, of type: %s", request, type(request))
        response = stub.ServerEcho(request)
        logging.info("Client received: %s, of type %s", response, type(response))

        # Unary Request -- Stream Response
        request = grpc_pb2.ClientRequest(message="you are the best")
        logging.info("Client sent: %s, of type: %s", request, type(request))
        response = stub.ServerEchoStream(request)
        for r in response:
            logging.info("Client received: %s, of type %s", r, type(r))

        # Stream Request -- Unary Response
        request = iter([grpc_pb2.ClientRequest(message="you are the best") for i in range(10)])
        logging.info("Client sent: %s, of type: %s", request, type(request))
        response = stub.ServerEchoClientStream(request)
        logging.info("Client received: %s, of type %s", response, type(response))

        # Stream Request -- Stream Response
        request = iter([grpc_pb2.ClientRequest(message="you are the best") for i in range(10)])
        logging.info("Client sent: %s, of type: %s", request, type(request))
        response = stub.ServerEchoStreamClientStream(request)
        for r in response:
            logging.info("Client received: %s, of type %s", r, type(r))


if __name__ == "__main__":
  main()