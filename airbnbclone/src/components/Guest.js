import React from 'react';
import './Guest.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAdult, minusAdult, addChildren, minusChildren, addBaby, minusBaby, addPet, minusPet } from '../actions';
const Guest = () => {
    const guests = useSelector((state) => state.search)
    const dispatch = useDispatch()

    const increaseAdult = () => {
        dispatch(addAdult())
    }
    const decreaseAdult = () => {
        dispatch(minusAdult())
    }
    const increaseChildren = () => {
        dispatch(addChildren())
    }
    const decreaseChildren = () => {
        dispatch(minusChildren())
    }
    const increaseBaby = () => {
        dispatch(addBaby())
    }
    const decreaseBaby = () => {
        dispatch(minusBaby())
    }
    const increasePet = () => {
        dispatch(addPet())
    }
    const decreasePet = () => {
        dispatch(minusPet())
    }

    return(
        <div className="guest-box">
            <section>
                <div>
                    <div className="guest-row">
                        <div className="guest-info">
                            <div className='guest-text1'>성인</div>
                            <div className='guest-text2'>만 13세 이상</div>
                        </div>
                        <div className="guest-buttons">
                            <div className="guest-botton-flex">
                                <button type="button" className='plusminus' onClick={decreaseAdult}>-</button>
                                <div>{guests.adult}</div>
                                <button type="button" className='plusminus' onClick={increaseAdult}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="guest-row">
                        <div className="guest-info">
                            <div className='guest-text1'>어린이</div>
                            <div className='guest-text2'>만 2~12세</div>
                        </div>
                        <div className="guest-buttons">
                            <div className="guest-botton-flex">
                                <button type="button" className='plusminus' onClick={decreaseChildren}>-</button>
                                <div>{guests.children}</div>
                                <button type="button" className='plusminus' onClick={increaseChildren}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="guest-row">
                        <div className="guest-info">
                            <div className='guest-text1'>유아</div>
                            <div className='guest-text2'>만 2세 미만</div>
                        </div>
                        <div className="guest-buttons">
                            <div className="guest-botton-flex">
                                <button type="button" className='plusminus' onClick={decreaseBaby}>-</button>
                                <div>{guests.baby}</div>
                                <button type="button" className='plusminus' onClick={increaseBaby}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="guest-row">
                        <div className="guest-info">
                            <div className='guest-text1'>반려동물</div>
                            <div className='guest-text2'>보조동물을 동반하시나요?</div>
                        </div>
                        <div className="guest-buttons">
                            <div className="guest-botton-flex">
                                <button type="button" className='plusminus' onClick={decreasePet}>-</button>
                                <div>{guests.pet}</div>
                                <button type="button" className='plusminus' onClick={increasePet}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='guest-text2' style={{marginTop: "8px", marginBottom: "16px"}}>반려동물을 3마리 이상 동반하는 경우, 반드시 호스트에게 알려주세요.</div>
            </section>
        </div>
    );
} 

export default Guest;