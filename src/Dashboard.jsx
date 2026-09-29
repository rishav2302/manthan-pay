import { useState } from 'react'
import { Form } from './components.jsx'
import { useT } from './i18n.jsx'
import { SERVICES, V, RATE } from './data.js'

const inr = (n) => '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 2 })

export default function Dashboard({ user, update, toast }) {
  const { t } = useT()
  const [tab, setTab] = useState('Mobile Recharge')
  const [pending, setPending] = useState(null) // payment waiting for MPIN
  const [receipt, setReceipt] = useState(null)
  const svc = SERVICES[tab]

  const review = async (v) => {
    const a = Number(v.amount)
    if (a > user.wallet) return { amount: `Insufficient wallet balance (${inr(user.wallet)}). Add money first.` }
    setPending({ ...v, a, service: tab, commission: +(a * RATE[tab]).toFixed(2) })
  }
  const confirm = async () => {
    await new Promise((r) => setTimeout(r, 800))
    const p = pending
    const tx = { id: 'MP' + Date.now().toString().slice(-9), service: p.service, to: p.no, amount: p.a, commission: p.commission, date: new Date().toLocaleString('en-IN'), status: 'Success' }
    update({ ...user, wallet: +(user.wallet - p.a + p.commission).toFixed(2), txns: [tx, ...user.txns] })
    setPending(null); setReceipt(tx)
  }
  const addMoney = async (v) => {
    await new Promise((r) => setTimeout(r, 600))
    update({ ...user, wallet: user.wallet + Number(v.amount) })
    toast(`${inr(v.amount)} added to wallet`)
  }
  const mpin = [{ k: 'mpin', label: 'Enter your 4-digit MPIN', password: true, type: 'num', max: 4,
    validate: (v) => (!/^\d{4}$/.test(v) ? 'MPIN must be 4 digits' : user.mpin && v !== user.mpin ? 'Incorrect MPIN' : '') }]

  return (
    <div className="wrap dash">
      <div className="dash-top">
        <div><h1>{t('Namaste')}, {user.name.split(' ')[0]} 👋</h1><p className="sub">{user.mobile} · PAN {user.pan}</p></div>
        <div className="wallet"><span>{t('Wallet balance')}</span><b>{inr(user.wallet)}</b></div>
      </div>
      <div className="dash-grid">
        <section className="panel">
          <h2>{t('Make a payment')}</h2>
          <div className="tabs">{Object.keys(SERVICES).map((k) => <button key={k} className={'tab' + (tab === k ? ' on' : '')} onClick={() => setTab(k)}>{SERVICES[k].icon} {t(k)}</button>)}</div>
          <Form key={tab} fields={svc.fields} submitLabel={t('Confirm')} onSubmit={review} />
        </section>
        <div>
          <section className="panel"><h2>{t('Add money')}</h2>
            <Form fields={[{ k: 'amount', label: 'Amount (₹)', type: 'num', validate: V.amount(100, 50000) }]} submitLabel={t('Add to wallet')} onSubmit={addMoney} /></section>
          <section className="panel"><h2>{t('Recent transactions')}</h2>
            {user.txns.length === 0 ? <p className="sub">{t('No transactions yet. Make your first payment.')}</p> : (
              <ul className="txns">{user.txns.slice(0, 6).map((x) => (
                <li key={x.id}><div><b>{t(x.service)}</b><small>{x.to} · {x.date}</small></div><div className="amt">-{inr(x.amount)}<small className="ok">{t(x.status)}</small></div></li>))}</ul>)}
          </section>
        </div>
      </div>

      {pending && (
        <div className="modal"><div className="box">
          <h3>{t('Confirm payment')}</h3>
          <dl className="sum">
            <dt>{t('Service')}</dt><dd>{t(pending.service)}</dd><dt>{t('To')}</dt><dd>{pending.no}</dd>
            <dt>{t('Amount')}</dt><dd>{inr(pending.a)}</dd><dt>{t('Service fee')}</dt><dd>{t('Free')}</dd>
            <dt>{t('Your commission')}</dt><dd className="ok">+{inr(pending.commission)}</dd>
          </dl>
          <Form fields={mpin} submitLabel={t('Confirm and pay')} onSubmit={confirm} extra={<button type="button" className="btn ghost block" onClick={() => setPending(null)}>{t('Cancel')}</button>} />
        </div></div>
      )}
      {receipt && (
        <div className="modal"><div className="box print-area" style={{ textAlign: 'center' }}>
          <div className="okc">✓</div><h3>{t('Payment successful')}</h3>
          <dl className="sum"><dt>{t('Service')}</dt><dd>{t(receipt.service)}</dd><dt>{t('To')}</dt><dd>{receipt.to}</dd><dt>{t('Amount')}</dt><dd>{inr(receipt.amount)}</dd>
            <dt>{t('Your commission')}</dt><dd className="ok">+{inr(receipt.commission)}</dd><dt>{t('Reference')}</dt><dd>{receipt.id}</dd><dd style={{ gridColumn: '1/-1', color: 'var(--muted)' }}>{receipt.date}</dd></dl>
          <div className="cta-row no-print" style={{ justifyContent: 'center' }}><button className="btn ghost" onClick={() => window.print()}>{t('Print receipt')}</button><button className="btn primary" onClick={() => setReceipt(null)}>{t('Done')}</button></div>
        </div></div>
      )}
    </div>
  )
}
