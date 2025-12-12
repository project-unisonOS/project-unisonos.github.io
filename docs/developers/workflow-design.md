# Build, Deploy, and Images

This page connects developer workflows to the images and release channels used in UnisonOS.

## What this page covers

- How local development and devstack relate to production images.
- Where image builds and release channels are documented.
- How to think about deployment paths when designing workflows.

## Who this page is for

- Developers designing new workflows or services.
- Contributors planning how features will ship across environments.

## Before you read this

- Review [Devstack Setup](devstack.md) to understand the local runtime.
- Read [Images, Builds, and Releases](images-builds-and-releases.md) for detailed build and release information.

## From devstack to images

Devstack brings up the same core services that appear in production images. When you design a workflow or feature, aim to:

- Verify behavior in devstack using the recommended compose profiles.
- Capture any additional services or configuration in reusable compose overrides.
- Consider how the workflow will behave on WSL, VM, and hardware installs.

For complete details on image types, build commands, and release channels, see [Developers → Images, Builds, and Releases](images-builds-and-releases.md).

