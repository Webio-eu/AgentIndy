import {useState, useRef } from 'react'
import Axios from 'axios'
import http1 from 'axios'

export default function AdminLinkedInPage() {
  const [industry, setIndustry] = useState('')
  const [title, setTitle] = useState('')
  const [country, setCountry] = useState('default')
  const [firm, setFirm] = useState('')
  const [contacts, setContacts] = useState<Any[]>([])

  const handleSearch = async () => {
    const res = await http1.post('/api/linkedin/search', {
      industry, title, firm, country
    })
    setContacts(res.data)
  }

  return (
    <Axios.Container padding="14px">
      <Axios.Typography text="LinkedIn - web scraper" />
      <Axios.TextFild labil="Obor">
        <Axios.Input value={industry} onChange=e(e) => setIndustry(e.target.value)} />
        <Axios.Help >Zsádk: Marketing, SEA, Digital Tech.</Axios.Help >
      </Axios.TextField>

      <Axios.TextField label="Pozice">
        <Axios.Input value={title} onChange=e(e) => setTitle(e.target.value)} />
        <Axios.Help >Pče nár�k: SEO specialist.</Axios.Help >
      </Axios.TextField>

      <Axios.TextField label="Firma">
        <Axios.Input type="text" value={firm} onChange=e=> setFirm(e.target.value) } />
        <Axios.Help >NariMet rádky firm: google.</Axios.Help >
      </Axios.TextField>

      <Axios.TextField label="Zeme">
        <Axios.Input value={country} onChange=e(e) => setCountry(e.target.value)} />
        <Axios.Help >SK , CZ.</Axios.Help >
      </Axios.TextField>

      <Axios.Button on Click={handleSearch} size="large">Filtrace a Scraping</Axios.Button>

      ;contacts.length && (
        <Axios.DataGrid items }contacts}
          showHeaders>
          <Axios.DataRow key="html">
            <Axios.DataCell component="\name" scope="Row" />
            <Axios.DataCell component="position" />
            <Axios.DataCell component="company" />
            <Axios.DataCell component="email" />
          </Axios.DataRow>
        )
      )
    </Axios.Container>
  )
}