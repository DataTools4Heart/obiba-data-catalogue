# DT4H Data Catalogue

The **DT4H Data Catalogue** is a centralized platform for managing and sharing metadata about AI-ready cardiology datasets generated across the **DataTools4Heart (DT4H)** federation. It is built on the [Obiba stack](https://www.obiba.org/) and includes the following key components:
- **Mica** (Metadata Catalogue): Provides a public interface for exploring metadata on available datasets.
- **Opal** (Data Management): Manages datasets and variables with advanced statistical capabilities.
- **Agate** (Authentication & Authorization): Handles user management and authentication.

This repository provides the Docker-based deployment files and instructions for setting up the DT4H Data Catalogue.

#### DT4H Testing Deployment

A test instance of the DT4H is accessible at https://catalogue.datatools4heart.bsc.es/
- Demo user credentials:
  - username: Demo_local
  - pass: Demo_local!01

It contains some exemplary datasets and studies only for demonstration purposes. Source data accessible at `demo_datasets/`

## Prerequisites

Before deploying the DT4H Data Catalogue, ensure the following are installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### Clone this repository

```bash
git clone https://github.com/DataTools4Heart/obiba-data-catalogue.git
cd obiba-data-catalogue
```

### Configuration

###### Environment Variables:

Copy the sample environment file and adjust configuration settings:
```
cp .env.sample .env
```
Edit the .env file to configure database connections, ports, and other necessary environment variables.
###### Docker Compose File:

The `docker-compose.yml` file includes services for Mica, Opal, and Agate. Review and adjust settings like ports and volumes if needed.

### Running the Stack
Build and start the containers:

```
docker-compose up -d
```

### Stopping the Services
To stop the services, run:

```
docker-compose down
```

### Accessing the Services
1. Mica (Metadata Catalogue):
- Provides an interface to explore metadata about cardiology datasets. Navigate to http://localhost:8080 to access the metadata catalogue.

2. Opal (Data Management):
- The data management platform for managing datasets and variables. Accessible at http://localhost:8081.

3. Agate (Authentication):
- Manages user authentication and permissions. Accessible at http://localhost:8082.


