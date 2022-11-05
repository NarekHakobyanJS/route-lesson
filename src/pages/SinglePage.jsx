import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// usePramas
//useParams hooks ը վերադարձնում է պառամետրները որը մենք գրել ենք 
//SinglePage Componnet ը կանչելու ժամանակ, այդ պառամետրները կարողեն լինել մեկից ավելին
//մեր օռրինակում այդ պարամետրը միյակն է id անունով


//useNavigate
//useNavigate hooks ը թույլա տալիս մեզ աշխատել Բրաուզերի Իստորիաի( history )) հետ
//useNavigate վերադարձնումա մեզ ֆունկցիա որը մենք դրելենք մեր կոդում navigate const ի մեջ
//const navigate = useNavigate()
//navigate Ֆունկցիան աշխատում է երկու պարամետրների հետ 
// 1․ պարամետրները մեզ ասումա թե որտեղ կարող ենք ուղարկել user ին
// կանչումենք navigate ֆունկցիան որին փոխանցում ենք Number
// const goBack = () => navigate(-1)
//-1 նշանակումա մի էջ հետ ենք գնում և այդպես շարունակ -1, -2 ... -n
// հետո այդ Ֆունկցիան տալիսենք button ին օրինակ
// Քայլերի հերդականությունը
// 1. const navigate = useNavigate()
// 2. const goBack = () => navigate(-1)
// 3. <button onClick={goBack} className="go-back">&#129044; հետ գնալ</button>


function SinglePage() {
    //այստեղ useParams ից դեստրուկտուրիզացիա ենք  անում մեր 
    //useParams() ի վերադարձրած արժեքը 
    //useParams() ը վերադարձնում է Օբյեկտ
    const { id } = useParams()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    //useState - ի նախնական արժեքրը null ա քանի որ մենք ստանումենք այստեղ Օբյեկտ
    const [post, setPost] = useState(null)

    //url - ին նայի վերջում դինամիկ պառամետրնա որը պետքա համընկնի Route - գռվածի հետ
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            <button onClick={goBack} className="go-back">&#129044; հետ գնալ</button>
            {post && (
            <div className='post-id'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={`/posts/${id}/edit`}>
                    Edit This Post
                </Link>
            </div>
        )}</div>
    )
}

export default SinglePage