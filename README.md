# TypeScript Excess Property Checks: Missing Optional Properties

This example demonstrates an uncommon TypeScript behavior related to excess property checks.  TypeScript's type system excels at catching missing *required* properties when an object literal is passed to a function.  However, it does *not* detect the absence of optional properties that were part of the expected interface.

This can lead to subtle runtime errors if not handled carefully.

## Reproducing the Bug

1.  Clone this repository.
2.  Compile and run the TypeScript code (`bug.ts`).
3.  Observe the behavior and the TypeScript compiler errors.

## Solution

The solution involves stricter type checking and is demonstrated in `bugSolution.ts`.