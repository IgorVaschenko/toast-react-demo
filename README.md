# react-toast-library
> This is a *Toast* Javascript library for presenting non-blocking notifications

## Installation

```sh
npm i toast-notify-react-non-blocking
```

## Demo

Static hosted [demo site][demo] on GitHub.

## Usage

```javascript
import {toast} from 'toast-notify-react-non-blocking';

export function App(customToastProperties) { ///customToastProperties is object

  toast.addToast({
      ...customToastProperties
    })

}
```

Here's a list of Properties:

```javascript
{
  type: "success"/"error"/"warning"/"info", //necessarily
  backgroundColor: "black",
  customDescription: "description text custom",
  customTitle: "custom",
  descriptionColor: "red",
  titleColor: "white",
  animation: "toast_from_top" / "toast_from_bottom" / "toast-from-left",
  autoDelete: false / true,
  autoDeleteTime: 3000, // in milliseconds
  padding: "20", // px
  position: "top-right"/ "top-left" / "bottom-right" / "bottom-left",
  PortalInsertionPointId: 'root'
}
```

#### Functional
* Show notification
* Ability to set notification position
* Ability to set notification type (success notification, error notification, alert, etc.)
* Ability to set notification duration
* Ability to set the title and description of the notification
* Ability to set notification padding
* Ability to change notification type color
* Ability to change the animation of appearance and disappearance
* Ability to delete by touch
* Ability to "swipe" notifications to the side for quick dismissal
* Show up to 3 notifications at the same time

[demo]: https://631c71a69907ec2db981ba03--profound-fox-7637de.netlify.app/

