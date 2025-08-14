import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import PlayCircle from '@mui/icons-material/PlayCircle';
import Gif from '@mui/icons-material/Gif';
import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FileDownload } from 'mdi-material-ui';

class AnimControls extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {  
		this.props.keyFrameDurationSet(event.target.value)
	}

	playDisabled() {
		return this.props.keyFrameTotal < 2;
	}

	addDisabled() {
		const lastKeyFrame = this.props.keyFrameTotal-1;
		return this.props.keyFrameCurrent !== lastKeyFrame;
	}

	deleteDisabled() {
		const lastKeyFrame = this.props.keyFrameTotal-1;
		return this.props.keyFrameCurrent !== lastKeyFrame || 0 === lastKeyFrame;
	}

	previousDisabled() {
		return 0 === this.props.keyFrameCurrent;
	}

	nextDisabled() {
		const lastKeyFrame = this.props.keyFrameTotal-1;
		return this.props.keyFrameCurrent === lastKeyFrame;
	}

	render(){
		return (
			<React.Fragment>
				<Tooltip title="Previous Key Frame">
					<span>
						<IconButton edge="end" color="inherit" aria-label="Previous Key Frame" onClick={this.props.keyFramePrevious} disabled={this.previousDisabled()}>
							<ArrowBack />
						</IconButton>
					</span>
				</Tooltip>
				<Tooltip title="Current Key Frame">
					<IconButton color="inherit" aria-label="Current Key Frame">
						{this.props.keyFrameCurrent}
					</IconButton>
				</Tooltip>
				<Tooltip title="Next Key Frame">
					<span>
						<IconButton edge="start" color="inherit" aria-label="Next Key Frame" onClick={this.props.keyFrameNext} disabled={this.nextDisabled()}>
							<ArrowForward />
						</IconButton>
					</span>
				</Tooltip>

				<Tooltip title="Add Key Frame">
					<span>
						<IconButton color="inherit" aria-label="Add Key Frame" onClick={this.props.keyFrameAdd} disabled={this.addDisabled()}>
							<Add />
						</IconButton>
					</span>
				</Tooltip>
				<Tooltip title="Delete Key Frame">
					<span>
						<IconButton color="inherit" aria-label="Add Key Frame" onClick={this.props.keyFrameDelete} disabled={this.deleteDisabled()}>
							<Delete />
						</IconButton>
					</span>
				</Tooltip>

				<Tooltip data-delay-hide="1000" title="Select key frame duration" placement="right">
					<FormControl variant="standard">
						<Select
							id="frameDurationSelect"
							onChange={this.handleChange}
							//defaultValue={5.0}>
							value={this.props.keyFrameDuration|| 1.5 }>
							<MenuItem value={0.5}>0.5</MenuItem>
							<MenuItem value={1.0}>1.0</MenuItem>
							<MenuItem value={1.5}>1.5</MenuItem>
							<MenuItem value={2.0}>2.0</MenuItem>
							<MenuItem value={3.0}>3.0</MenuItem>
							<MenuItem value={5.0}>5.0</MenuItem>
							<MenuItem value={7.0}>7.0</MenuItem>
							<MenuItem value={10.0}>10.0</MenuItem>
						</Select>
					</FormControl>
				</Tooltip>

				<Tooltip title="Play Animation">
					<span>
						<IconButton aria-label="Play Animation" color="inherit" onClick={this.props.animPlayerShow} disabled={this.playDisabled()}>
							<PlayCircle />
						</IconButton>
					</span>
				</Tooltip>

				<Tooltip title="Download as gif">
					<span>
						<IconButton aria-label="Download as gif" color="inherit" onClick={this.props.animDownloadGif} disabled={this.playDisabled()}>
							<Gif />
						</IconButton>
					</span>
				</Tooltip>

				<Tooltip title="Download as video">
					<span>
						<IconButton aria-label="Download as video" color="inherit" onClick={this.props.animDownloadVideo} disabled={this.playDisabled()}>
							<FileDownload />
						</IconButton>
					</span>
				</Tooltip>

			</React.Fragment>
		);
	}
}

AnimControls.defaultProps = {
	keyFrameCurrent: 0,
	keyFrameTotal: 0,
	keyFrameAdd: null,
	keyFrameDelete: null,
	keyFrameNext: null,
	keyFramePrevious: null,
	keyFrameDurationSet: null,
	animPlayerShow: null,
	animDownloadGif: null,
	animDownloadVideo: null
}

AnimControls.propTypes = {
	keyFrameCurrent: PropTypes.number,
	keyFrameTotal: PropTypes.number,
	keyFrameAdd: PropTypes.func,
	keyFrameDelete: PropTypes.func,
	keyFrameNext: PropTypes.func,
	keyFramePrevious: PropTypes.func,
	keyFrameDurationSet: PropTypes.func,
	animPlayerShow: PropTypes.func,
	animDownloadGif: PropTypes.func,
	animDownloadVideo: PropTypes.func
}

export default AnimControls;