import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar'

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="https://github.com/gabrielmelo.png" alt="@shadcn" />
			<AvatarFallback>GM</AvatarFallback>
		</Avatar>
	),
}
