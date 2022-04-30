import { avatar } from './avatar'

export default function blogInfos() {
	return (
		<ul
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr',
				gridGap: '4em'
			}}
		>
			{avatar.map((avatar) => {
				return (
					<li key={avatar._id}>
						<p>{avatar.name}</p>
						<img src={avatar.photoUrl} width="100%" alt="" />
					</li>
				)
			})}
		</ul>
	)
}
