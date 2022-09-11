import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import ToastContainer from '@/components/Toast/ToastContainer';
import toast from '@/containers/ToastCore/ToastClass';
import { ANIMATIONS, BUTTON_PROPS, POSITIONS } from '@/constants';
import {
  Application,
  Select,
  Input,
  SelectItem,
  SelectOption,
  ToastButtons,
  InputColor,
  WrapperForColor,
  Label,
  ButtonCustom,
  CheckInput,
  ButtonGetToast,
  Icons,
  RadioWrapper,
  SingleIcon,
  LabelIco,
  TitleIco,
  AutoLabel,
  OptionsLabel,
  ButtonStory
} from '@/components/App/components'
import GlobalStyles from '@/theme/globalStyles';

export function App(storyProps) {

  const getStoryToast = () => {
    toast.addToast({
      ...storyProps
    })
  }

  const [toastProps, setToastProps] = useState({
    type: '',
    autoDelete: '',
    autoDeleteTime: '',
    title: '',
    description: '',
    padding: '',
    PortalInsertionPointId: '',
    position: POSITIONS[0].title,
    animation: '',
    titleColor: '',
    descriptionColor: '',
    backgroundColor: '',
  });

  const showToast = (type) => {
    toast.addToast({
      type,
      position: toastProps.position,
    })

    setToastProps({
      type: toast.getLatestToast().type,
      autoDelete: toast.getLatestToast().autoDelete,
      autoDeleteTime: toast.getLatestToast().autoDeleteTime,
      title: toast.getLatestToast().title,
      description: toast.getLatestToast().description,
      padding: toast.getLatestToast().padding,
      PortalInsertionPointId: toast.getLatestToast().PortalInsertionPointId,
      position: toast.getLatestToast().position,
      animation: toast.getLatestToast().animation,
      titleColor: toast.getLatestToast().titleColor,
      descriptionColor: toast.getLatestToast().descriptionColor,
      backgroundColor: toast.getLatestToast().backgroundColor,
    })
  }

  const handleChange = () => {
    event.target.name === 'type' && setToastProps({ ...toastProps, type: event.target.value })
    event.target.name === 'autoDelete' && setToastProps({ ...toastProps, autoDelete: !toastProps.autoDelete })
    event.target.name === 'autoDelete' && toast.toasts.map(toast => ({ ...toast, autoDelete: toastProps.autoDelete }))
    event.target.name === 'autoDeleteTime' && setToastProps({ ...toastProps, autoDeleteTime: event.target.value })
    event.target.name === 'title' && setToastProps({ ...toastProps, title: event.target.value })
    event.target.name === 'description' && setToastProps({ ...toastProps, description: event.target.value })
    event.target.name === 'padding' && setToastProps({ ...toastProps, padding: event.target.value })
    event.target.name === 'PortalInsertionPointId' && setToastProps({ ...toastProps, PortalInsertionPointId: event.target.value })
    event.target.name === 'position' && setToastProps({ ...toastProps, position: event.target.value })
    event.target.name === 'position' && toast.toasts.map(toast => ({ ...toast, position: toastProps.position }))
    event.target.name === 'animation' && setToastProps({ ...toastProps, animation: event.target.value })
    event.target.name === 'titleColor' && setToastProps({ ...toastProps, titleColor: event.target.value })
    event.target.name === 'descriptionColor' && setToastProps({ ...toastProps, descriptionColor: event.target.value })
    event.target.name === 'backgroundColor' && setToastProps({ ...toastProps, backgroundColor: event.target.value })
  }

  const GetToast = () => {
    toast.addToast({
      ...toastProps
    })
  }

  return (
    <>
      {Object.keys(storyProps).length ?
        <>
            <ButtonStory onClick={getStoryToast}>Get Toast</ButtonStory>
            <ToastContainer
              position={storyProps.position}
              PortalInsertionPointId={storyProps.PortalInsertionPointId}
            />
        </>
        :
        <>
          <Application>
            <p>React Toast Component</p>
            <ToastButtons >
              {
                BUTTON_PROPS.map(button =>
                  <ButtonCustom
                    key={button.id}
                    bgcolor={button.backgroundColor}
                    onClick={() => showToast(button.type)}
                  >
                    {button.label}
                  </ButtonCustom>
                )
              }
            </ToastButtons>
            <Select>
              <AutoLabel>
                Auto Delete
                <CheckInput
                  type="checkbox"
                  name='autoDelete'
                  checked={toastProps.autoDelete}
                  onChange={handleChange}
                />
              </AutoLabel>
              <Icons>
                <TitleIco>Choose type ( necessarily! )</TitleIco>
                <RadioWrapper>
                  <SingleIcon>
                    <LabelIco>
                      <Input
                        type="radio"
                        name="type"
                        value='success'
                        checked={'success' === toastProps.type}
                        onChange={handleChange}
                      />
                      success
                    </LabelIco>
                  </SingleIcon>
                  <SingleIcon>
                    <LabelIco>
                      <Input
                        type="radio"
                        name="type"
                        value='error'
                        checked={'error' === toastProps.type}
                        onChange={handleChange}
                      />
                      error
                    </LabelIco>
                  </SingleIcon>
                  <SingleIcon>
                    <LabelIco>
                      <Input
                        type="radio"
                        value='info'
                        name="type"
                        checked={'info' === toastProps.type}
                        onChange={handleChange}
                      />
                      info
                    </LabelIco>
                  </SingleIcon>
                  <SingleIcon>
                    <LabelIco>
                      <Input
                        type="radio"
                        value='warning'
                        name="type"
                        checked={'warning' === toastProps.type}
                        onChange={handleChange}
                      />
                      warning
                    </LabelIco>
                  </SingleIcon>
                </RadioWrapper>
              </Icons>
              <Input
                type="number"
                name="autoDeleteTime"
                placeholder="Autodelete time default, ms"
                value={toastProps.autoDeleteTime}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="title"
                placeholder="Title"
                autoComplete="false"
                value={toastProps.title}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="description"
                placeholder="Description"
                value={toastProps.description}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="padding"
                placeholder="Padding default: 20px"
                value={toastProps.padding}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="PortalInsertionPointId"
                placeholder="Portal container default: document.body"
                value={toastProps.PortalInsertionPointId}
                onChange={handleChange}
              />
              <WrapperForColor>
                <OptionsLabel>Select Position</OptionsLabel>
                <SelectItem
                  name="position"
                  value={toastProps.position}
                  onChange={handleChange}
                >
                  {POSITIONS.map(position => (
                    <SelectOption key={uuidv4()} value={position.title}>{position.description}</SelectOption>
                  ))}
                </SelectItem>
              </WrapperForColor>
              <WrapperForColor>
                <OptionsLabel>Select Animation</OptionsLabel>
                <SelectItem
                  name="animation"
                  value={toastProps.animation}
                  onChange={handleChange}
                >
                  <SelectOption>Select Animation</SelectOption>
                  {ANIMATIONS.map(position => (
                    <SelectOption key={uuidv4()} value={position.title}>{position.description}</SelectOption>
                  ))}
                </SelectItem>
              </WrapperForColor>
            </Select>
            <WrapperForColor>
              <Label>Choose Title Color</Label>
              <InputColor
                type="color"
                name="titleColor"
                value={toastProps.titleColor}
                onChange={handleChange}
              />
            </WrapperForColor>
            <WrapperForColor>
              <Label>Choose Description Color</Label>
              <InputColor
                type="color"
                name="descriptionColor"
                value={toastProps.descriptionColor}
                onChange={handleChange}
              />
            </WrapperForColor>
            <WrapperForColor>
              <Label>Choose Background</Label>
              <InputColor
                type="color"
                name="backgroundColor"
                value={toastProps.backgroundColor}
                onChange={handleChange}
              />
            </WrapperForColor>
            <ButtonGetToast
              disabled={toastProps.type ? false : true}
              onClick={GetToast}>
              Get Toast
            </ButtonGetToast>
          </Application>
          <ToastContainer
            position={toastProps.position}
            PortalInsertionPointId={toastProps.PortalInsertionPointId}
          />
          <GlobalStyles />
        </>
      }
    </>
  )
}

export default App;


