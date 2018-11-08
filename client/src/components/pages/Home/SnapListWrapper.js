import React, {Component} from 'react';
import SnapListItem from "./SnapListItem";

class SnapListWrapper extends Component {
	componentDidMount() {
		this.props.subscribeToNewSnaps();
	}

	render() {
		const { data } = this.props;

		return (
			<div>
				<ul className="snaps">
					{
						data.snaps.map(snap => (
							<SnapListItem key={snap.id}  snap={snap} />
						))
					}
				</ul>

				<div className="counter">{data.snaps.length} snap(s)</div>
			</div>
		);
	}
}

export default SnapListWrapper;
