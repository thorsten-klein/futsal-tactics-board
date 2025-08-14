import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawMode from '../pitch/DrawMode';
import withStyles from '@mui/styles/withStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';
import DrawMenu from './DrawMenu';
import FullscreenToggle from './FullscreenToggle';
import AnimControls from './AnimControls';
import UserAccount from './UserAccount';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AppUser from '../AppUser';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// this is for custom position classes
const styles = theme => ({
	grow: {
		flexGrow: 1,
	},
    clickableName: {
        cursor: 'pointer',
        textDecoration: 'underline'
    }
});

class AppTools extends Component {

	state = {
		nameDialogOpen: false,
		tempBoardName: this.props.boardName || ''
	};

	openNameDialog = () => {
		this.setState({
			nameDialogOpen: true,
			tempBoardName: this.props.boardName || ''
		});
	};

	closeNameDialog = () => {
		this.setState({ nameDialogOpen: false });
	};

	handleNameChange = () => {
		if (this.props.onBoardNameChange) {
			this.props.onBoardNameChange(this.state.tempBoardName);
		}
		this.closeNameDialog();
	};

	renderAnimControls() {
		if (!this.props.animExists) {
			return null;
		}
		return (
			<React.Fragment>
				<div className={this.props.classes.grow} />
				<AnimControls 
					keyFrameCurrent={this.props.animKeyFrameCurrent}
					keyFrameTotal={this.props.animKeyFrameTotal}
					keyFrameAdd={this.props.animKeyFrameAdd}
					keyFrameDelete={this.props.animKeyFrameDelete}
					keyFrameNext={this.props.animKeyFrameNext}
					keyFramePrevious={this.props.animKeyFramePrevious}
					keyFrameDurationSet={this.props.animKeyFrameDurationSet}
					animPlayerShow={this.props.animPlayerShow}
					animDownloadGif={this.props.animDownloadGif}
					animDownloadVideo={this.props.animDownloadVideo}
				/>
			</React.Fragment>
		);
	}

	renderSiteHome() {
		if (null === this.props.siteHome) {
			return null;
		}
		return (
			<Tooltip title="Site home">
				<IconButton color="inherit" aria-label="home" onClick={this.props.siteHome}>
					<HomeIcon />
				</IconButton>
			</Tooltip>
		)
	}

	render() {
		return (
			<React.Fragment>
				<AppBar position="fixed">
					<Toolbar variant="regular">
						<IconButton edge="start" color="inherit" aria-label="menu" onClick={this.props.toggleDrawer}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit">
							Futsal tactics board — <span className={this.props.classes.clickableName} onClick={this.openNameDialog}>
								{this.props.boardName || 'Untitled'}
							</span>
						</Typography>
						{this.renderSiteHome()}
						{this.renderAnimControls()}
						<div className={this.props.classes.grow} />
						<DrawMenu drawMode={this.props.drawMode} extrasCreate={this.props.extrasCreate} />
						<Tooltip title="Help">
							<IconButton aria-label="Help" color="inherit" onClick={this.props.showHelp}>
								<HelpCenterIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Share link">
							<span>
								<IconButton aria-label="Share link" color="inherit" disabled={!this.props.shareEnabled} onClick={this.props.shareTactics}>
									<LinkIcon />
								</IconButton>
							</span>
						</Tooltip>
						<FullscreenToggle />
						<UserAccount 
							currentUser={this.props.currentUser}
							signIn={this.props.signIn}
							signOut={this.props.signOut}
						/>
					</Toolbar>
				</AppBar>

				<Dialog open={this.state.nameDialogOpen} onClose={this.closeNameDialog}>
					<DialogTitle>Edit Board Name</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							label="Board Name"
							type="text"
							fullWidth
							variant="standard"
							value={this.state.tempBoardName}
							onChange={(e) => this.setState({ tempBoardName: e.target.value })}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.closeNameDialog} color="secondary">Cancel</Button>
						<Button onClick={this.handleNameChange} color="primary">Save</Button>
					</DialogActions>
				</Dialog>
			</React.Fragment>
		);
	}
}

AppTools.defaultProps = {
	drawMode: null,
	animExists: false,
	animKeyFrameCurrent: 0,
	animKeyFrameTotal: 0,
	animKeyFrameAdd: null,
	animKeyFrameDelete: null,
	animKeyFrameNext: null,
	animKeyFramePrevious: null,
	keyFrameDurationSet: null,
	animPlayerShow: null,
	animDownloadGif: null,
	animDownloadVideo: null,
	extrasCreate: null,
	toggleDrawer: null,
	shareTactics: null,
	shareEnabled: false,
	showHelp: null,
	currentUser: null,
	signIn: null,
	signOut: null,
	siteHome: null,
	boardName: '',
	onBoardNameChange: null
}

AppTools.propTypes = {
	drawMode: PropTypes.instanceOf(DrawMode),
	animExists: PropTypes.bool,
	animKeyFrameCurrent: PropTypes.number,
	animKeyFrameTotal: PropTypes.number,
	animKeyFrameAdd: PropTypes.func,
	animKeyFrameDelete: PropTypes.func,
	animKeyFrameNext: PropTypes.func,
	animKeyFramePrevious: PropTypes.func,
	keyFrameDurationSet: PropTypes.func,
	animPlayerShow: PropTypes.func,
	animDownloadGif: PropTypes.func,
	animDownloadVideo: PropTypes.func,
	extrasCreate: PropTypes.func,
	toggleDrawer: PropTypes.func,
	shareTactics: PropTypes.func,
	shareEnabled: PropTypes.bool,
	showHelp: PropTypes.func,
	currentUser: PropTypes.instanceOf(AppUser),
	signIn: PropTypes.func,
	signOut: PropTypes.func,
	siteHome: PropTypes.func,
	boardName: PropTypes.string,
	onBoardNameChange: PropTypes.func
}

export default withStyles(styles, { withTheme: true })(AppTools);

