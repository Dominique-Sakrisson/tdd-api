bring in jest 
npm install --save-dev jest

configure jest
add to package.json

```
"jest": {
     "testEnvironment" : "node",
     "coveragePathIgnorePatterns": [
       "/node_modules/"
     ]
   }
```

coveragePathIgnorePatterns
    are the paths that must be ignored by jest 

add script 
```
{
    "scripts": {
        "test": "jest"
    }

}
```

create test directory, and file sample.test.js

setup test to import our test file
test shoud fail


bring in http

