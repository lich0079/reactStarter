# ReduxSimpleStarter

## react-redux
sync version
1. UI compoent container connect with state from reducer, coneect with action creators
2. user click UI, trigger action creator method to create action(intent)
3. action go through all reducer, some reducer catch the action, and return new state
4. UI redraw


async
1. using redux-promise middleware in aync call
2. return promise as action payload
3. middleware will resolve promise payload to result
4. reduce then can use result as aync call not exist







## Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```