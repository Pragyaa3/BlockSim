# Blockchain Simulation

## Overview
This project is a simple blockchain simulation that demonstrates the core functionalities of a blockchain, including block creation, hashing, proof-of-work, transaction management, and chain validation.

## Features
- Blocks contain index, timestamp, transactions, previous hash, current hash, nonce, and difficulty.
- SHA-256 hashing is used for generating block hashes.
- Proof-of-Work mechanism is implemented to validate blocks before adding them to the chain.
- The blockchain ensures integrity by linking blocks with previous hashes.
- Transactions can be added before mining.
- Tampering with the blockchain is detected using validation.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (Optional for containerization)

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/blockchain-sim.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blockchain-sim
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
### Running the Blockchain Simulation
To run the blockchain simulation, execute:
```sh
node index.js
```

### Sample Output
```sh
Block mined: 000098d6235c3a8c05314067c897f79797b77c7a4663dd2f58cd89ae5425bb66
Blockchain valid? true
Block mined: 00000a9ab484172872c868f42eae101b56e35cff0a91aa606a210ae690074ef0
Blockchain valid after adding new block? true
```

## Docker Setup (Optional)
To run this project inside a Docker container:
1. Build the Docker image:
   ```sh
   docker build -t blockchain-sim .
   ```
2. Run the container:
   ```sh
   docker run --rm blockchain-sim
   ```

## Code Structure
```
blockchain-sim/
│── index.js          # Main entry point
│── block.js          # Block class definition
│── blockchain.js     # Blockchain class handling the chain
│── package.json      # Project dependencies
│── Dockerfile        # Docker configuration (if used)
│── README.md         # Project documentation
```

## How It Works
1. **Block Structure:** Each block consists of an index, timestamp, transactions, previous hash, and current hash.
2. **Proof-of-Work:** A computational puzzle ensures mining difficulty.
3. **Hash Linking:** Each block references the previous hash, maintaining integrity.
4. **Validation:** If any block is modified, the entire chain becomes invalid.

