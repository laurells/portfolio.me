import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'Reminder // Laurels Echichinwo Jr.',
    description:
      'Time is not merely a commodity; it is the essence of life itself. It is not just about money; it is about the precious moments that define our existence..',
    tagline: 'Twinkle, Twinkle',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Reminder(props) {
  const { title, description, image } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="/reminder" property="og:url" />
        <meta content={`#`} property="og:image" />
      </Head>

      <Box css={{ textAlign: 'justify' }}>
        <p>
        Time is more than just a resource; it's the essence of existence itself. It's not about the dollars earned; it's about the moments lived. Each tick of the clock represents a heartbeat, a breath, a chance to make a difference. We're all battling our inner demons, but it's our duty to uplift and inspire one another. No one is inherently superior; we're all equals on this journey called life. While comfort is enticing, growth lies beyond its confines. Keep learning, keep creating, and don't let the naysayers deter you. Happiness isn't found in external validation; it's cultivated from within. Cherish every moment, find joy in the mundane, and never underestimate the love of your parents. Embrace the unknown, for therein lies true discovery. Life is fleeting, and every day is a gift. So, pursue your passions, seize the moment, and live without regrets. The clock is ticking, but it's never too late to make each second count
        </p>
        <p>
          <em>- by Laurels</em>
        </p>
      </Box>
    </>
  )
}

Reminder.Layout = Base

export default Reminder
