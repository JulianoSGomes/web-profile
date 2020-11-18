import {
  Avatar,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Tooltip,
  Typography
} from '@material-ui/core'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import {
  Github,
  Telegram,
  Instagram,
  Email,
  Send,
  ContentCopy
} from 'mdi-material-ui'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}))
export default function Home() {
  const classes = useStyles()
  const email = 'contact@julianogomes.dev'
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setOpen(false)
  }

  const handleSendEmail = () => {
    setOpen(false)

    Router.push(`mailto:${email}`)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Juliano Gomes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Avatar alt="me" src="/me.jpeg" className={classes.large} />
        <Typography>Juliano de Souza Gomes</Typography>
        <Tooltip title="ReactJS / NodeJS">
          <Typography variant="body2">Full Stack Developer</Typography>
        </Tooltip>
        <div>
          <Tooltip title="Github">
            <IconButton>
              <a
                href="https://github.com/JulianoSGomes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </IconButton>
          </Tooltip>
          <Tooltip title="Telegram">
            <IconButton>
              <a
                href="https://t.me/GOMESjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram />
              </a>
            </IconButton>
          </Tooltip>

          <Tooltip title="Instagram">
            <IconButton>
              <a
                href="https://www.instagram.com/julianosgomes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </IconButton>
          </Tooltip>

          <Tooltip title="Clique para copiar o email">
            <IconButton onClick={handleClickOpen}>
              <Email />
            </IconButton>
          </Tooltip>
        </div>
      </main>
      <Dialog onClose={handleClose} open={open}>
        <List>
          <ListItem button onClick={handleSendEmail} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <Send />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Enviar email" />
          </ListItem>

          <ListItem button onClick={handleCopyEmail}>
            <ListItemAvatar>
              <Avatar>
                <ContentCopy />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Copiar email" />
          </ListItem>
        </List>
      </Dialog>

      <footer className={styles.footer}>Powered by Juliano Gomes</footer>
    </div>
  )
}
