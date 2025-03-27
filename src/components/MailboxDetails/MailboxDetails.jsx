import { Link } from 'react-router'
import { useParams } from 'react-router';


const MailboxDetails = (props) => {
    console.log(props)

    const { mailboxId } = useParams();
    console.log('mailboxId', mailboxId);

    // const singleMailbox = props.mailbox.find((box) => (
    //     box._id === Number(mailboxId)
    // ));

    // console.log('singleMailbox', singleMailbox)
    return (
        <>
        <h2></h2>
        <dl>
            <dt>MailBox #:</dt>
            <dd></dd>
            <dt>Size:</dt>
            <dd></dd>
            <dt>Owner:</dt>
            <dd></dd>
        </dl>
        </>

    )
};

export default MailboxDetails;