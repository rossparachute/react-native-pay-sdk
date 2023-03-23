# Dojo React Native Pay SDK

React Native wrapper for Dojo Payment iOS and Android SDKs

## Installation

Add the package to your project

```sh
npm install dojo-react-native-pay-sdk
```

### Android

Add the dependency to your apps `build.gradle`

```groovy
implementation("tech.dojo.pay:uisdk:1.1.0")
implementation("tech.dojo.pay:sdk:1.4.0")
```

Add the necessary repositories to retrieve the dependencies

```groovy
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/dojo-engineering/android-dojo-pay-sdk")
        credentials {
            username = project.findProperty("gpr.user")
            password = project.findProperty("gpr.key")
        }
    }
    maven {
        url = uri("https://cardinalcommerceprod.jfrog.io/artifactory/android")
        credentials {
            username = project.findProperty("cardinal.user")
            password = project.findProperty("cardinal.key")
        }
    }
}
```

You must set the credentials for accessing both repositories in your `~/.gradle/gradle.properties`

```
gpr.user={your github user}
gpr.key={github personal access token}
cardinal.user={cardinal user}
cardinal.key={cardinal password}
```

Add the following code to your apps `MainActivity.java`

```java
import com.dojoreactnativepaysdk.DojoPay;

...

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  DojoPay.init(this);
}
```

## Usage

```js
import { startPaymentFlow } from 'dojo-react-native-pay-sdk';

// ...

const result = await startPaymentFlow({ intentId: '{{ payment intent ID }}' });

if (result === 0) {
  // success
} else {
  // error
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

Dojo React Native Pay SDK is available under the MIT license. See the LICENSE file for more info.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
