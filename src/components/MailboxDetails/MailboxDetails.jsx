import { Link } from 'react-router'
import { useParams } from 'react-router';




const MailboxDetails = (props) => {
    console.log(props)

    const { mailboxId } = useParams();
    console.log('mailboxId', mailboxId);

    const singleMailbox = props.mailboxes.find((box) => (
        box._id === mailboxId
    ));

    console.log('singleMailbox', singleMailbox)
    console.log('size', props.boxSize)
    console.log('owner', props.boxOwner)
    console.log('id', props._id)

    return (
        <>
        <h2></h2>
        <dl>
            <dt>MailBox #:{props._id}</dt>
            <dd></dd>
            <dt>Size:{singleMailbox.boxSize}</dt>
            <dd></dd>
            <dt>Owner:{props.boxOwner}</dt>
            <dd></dd>
        </dl>
        </>

    )
};

export default MailboxDetails;