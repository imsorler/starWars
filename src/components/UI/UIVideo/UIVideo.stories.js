import UIVideo from './UIVideo'
import video from './video/tv.mp4'

export default {
  title: 'UI-Kit/UI-Video',
  component: UIVideo
}

const Template = (args) => <UIVideo {...args} />

const props = {
  playbackRate: 1.0,
  src: video,
  classes: '',
}

export const Default = Template.bind({})
Default.args = {
  ...props,
}