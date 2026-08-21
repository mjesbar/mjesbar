#!/usr/bin/env python
import time
import json


"""Client using the asyncio API."""

import asyncio
from websockets.asyncio.client import connect


async def hello():
    async with connect("wss://jkn9s3qbk6jmhj-12345.proxy.runpod.net") as websocket:
        message = {
            "role": "system",
            "content": "This is a message to alter the user system prompt"
        }
        message = json.dumps(message, indent=4, default=str)
        print(f"Connected to {websocket.remote_address}")
        while True:
            await websocket.send(message)
            print(f"Sent: {message}")
            time.sleep(1)


if __name__ == "__main__":
    asyncio.run(hello())
