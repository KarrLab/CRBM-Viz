### BioSimulations Containerized Development Environment using VS Code Dev containers.

#### _Getting Started_:
1. Open this repo in VS Code
2. Open the command palatte (CMD + SHIFT + P)
3. Type and select: `Dev Containers: Rebuild and Reopen in Container`. A new window will open.
4. Once the dev container builds successfully, open a new terminal window in the container and run: `npx nx run platform:serve --host 0.0.0.0 --port 4200`. The dev content will be available at `http://localhost:4200`.