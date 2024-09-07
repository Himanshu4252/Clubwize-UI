import React from 'react'
import styles from './Chat.module.css'
import Image from 'next/image';
import img1 from '../../../../public/Image/Rectangle 3070 (18).svg'


function Chat() {

    const messages = [
        { id: 1, name: "Courtney Henry", message: "Photos", count: 15, avatar: "/Image/Rectangle 3070 (21).svg" },
        { id: 2, name: "Darrell Steward", message: "Thanks @john", count: 8, avatar: "/Image/Rectangle 3070 (20).svg" },
        { id: 3, name: "Bessie Cooper", message: "Me: like your idea", count: 0, avatar: "/Image/Rectangle 3070 (19).svg" },
        { id: 4, name: "Savannah Nguyen", message: "Barely has changed the group icon", count: 0, avatar: "/Image/Rectangle 3070 (18).svg" },
        { id: 5, name: "Jerome Bell", message: "Cameron: Shall we now?", count: 0, avatar: "/Image/Rectangle 3070 (22).svg" },
        { id: 6, name: "Annette Black", message: "Me: like your idea", count: 0, avatar: "/Image/Rectangle 3070 (19).svg" }
      ];



  return (
    <div className={styles.chatContainer}>
    <div className={styles.chatHeader}>
      <p>My Chat</p>
      <button className={styles.inviteButton}>+ Invite</button>
    </div>
    <div className={styles.chatBox}>
      {messages.map((msg) => (
        <div key={msg.id} className={styles.chatMessage}>
          <img src={msg.avatar} alt={msg.name} className={styles.userAvatar} />
          <div className={styles.messageInfo}>
            <div className={styles.messageHeader}>
              <span className={styles.userName}>{msg.name}</span>
              {msg.count > 0 && (
                <div className={styles.messageCount}>{msg.count}+</div>
              )}
            </div>
            <p className={styles.messageContent}>{msg.message}</p>
          </div>
          <div className={styles.moreOptions}>
            <span>⋮</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Chat
