## callback pyramid of doom

a problem that arises when a program uses many levels of indention(nested) pyramids in a function;
can cause bugs
error handling

## promise

rep the completion or failure of an async operation and it's result
after completeion they are sayed to be settled/resolved

# promise states

pending
fulfilled
rejected

### consuming promises

a fulfilled function use .then(promise function). takes single parameter
a rejected function us e .catch(promise function) to catch the error, takes single parameter

## queueing promises

# all

returns values in form of an array

# all settled

returns values in form of an array but specifies whether fulfilled or rejected

# some- returns true for atleast one item in the oblect array

similar to promise.any()

# every - returns true for all items in the object array

Array.every() is similar to Promise.all()

## difference between promise.all and any

both accept array of promises
all returns array of results, all returns single value
all catches first rejection, all catches if all reject

use any when you have redundancy and want first response

promise.race is similar to any but race returns first settled(doesn't care about results) while any returns first successful or afyer all rejected

race needs both then() an catch()

## syntactic sugar - syntax within a programming language that makes things easier to read

## Asyc/Await

await must be inside async funstion
use
uses try catch like in js and unlike catch in promises to catch an error

## errors

compile time errors
run-time errors:
syntax errors
logic errors
