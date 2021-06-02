import React from 'react';
import {connect} from 'react-redux';
import {
    getUsers, setCurrentPage,
    follow, unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from './../../assets/common/preloader/Preloader';
import {withAuthRedirect} from '../../assets/hoc/withAuthRedirect';
import {compose} from 'redux';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users}
                   onPageChanged={this.onPageChanged} follow={this.props.follow}
                   unfollow={this.props.unfollow} followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, getUsers}), withAuthRedirect
)(UsersContainer)