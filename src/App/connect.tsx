import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect'
import { setAuthenticated } from "../state/app/actions";
import { isAuthenticated } from "../state/app/selectors";

const mapStateToProps = createStructuredSelector({
    isAuthenticated: isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch) => { return { setAuthenticated: (payload: any) => dispatch(setAuthenticated(payload)) } }


export default connect<any, any>(mapStateToProps, mapDispatchToProps);