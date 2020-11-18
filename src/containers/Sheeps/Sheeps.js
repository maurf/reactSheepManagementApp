import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'
import SheepsList from '../../components/SheepsList/SheepsList';

const Sheeps = props => {
    const dispatch = useDispatch();
    const sheeps = useSelector( state =>  state.sheepManager.sheeps );
    const loading = useSelector(state => state.sheepManager.loading);


    const onInitSheeps = useCallback(
        () => dispatch(actions.fetchSheeps()),
        [dispatch]
    );

    useEffect(() => {
        onInitSheeps();
    }, [onInitSheeps])

    let sheepList = <div>loading</div>;
    console.log("loading", loading);
    console.log(sheeps);
    if (!loading) {
        console.log("success sss");

        sheepList = <p>sadsa</p>
        sheepList = <SheepsList list={sheeps} />
    }
    return (
        <div className="container mx-auto px-6 py-8">
            {sheepList}
        </div>
    )
};

export default Sheeps;