# Development
A good development process will introduce small, validated changes.

## Testing
Code is meant to do something, usually displaying information or manipulating information. As such, we can and should validate that the code works correctly. More importantly, we can validate the process. Functionality that isn't automatically will eventually stop existing, and this eventuality is often sooner than one thinks.

### Continuous Integration
Continuous Integration allows us to validate our code automatically. We can create rules for running and executing code. The integration describes a the process of integrating changes in our code into our code base. We want small, continuous, and validated changes being introduced into our codebase.

The testing is specified in [.github/workflows](./.github/workflows)
