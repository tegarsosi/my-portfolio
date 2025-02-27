/*
 * Background Grid Component
 * Inspired by/Adapted from: Ben Shumaker
 * Source: https://www.vigilant.run/blog/designing-backgrounds-with-llms-and-react
 * License: MIT
 */

import { useState } from 'react'

const COLORS = ['#7F58AF', '#64C5EB', '#E84D8A', '#FEB326']

export default function Background() {
    return (
        <div
        className="fixed top-0 left-0 w-full h-screen grid bg-[#050505] overflow-hidden"
        style={{
            gridTemplateColumns: 'repeat(auto-fill, 32px)',
            gridTemplateRows: 'repeat(auto-fill, 32px)',
        }}
        >
        {[...Array(3000)].map((_, i) => (
            <Cell key={i} />
        ))}
        </div>
    )
    }

function Cell() {
    const [tempActive, setTempActive] = useState(false)
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]

    return (
        <div
        onMouseEnter={() => {
            setTempActive(true)
            setTimeout(() => setTempActive(false), 4000)
        }}
        className="w-8 h-8 border"
        style={{
            background: tempActive ? `${color}1a` : '#050505',
            border: `solid ${tempActive ? `1px ${color}` : '0.5px #20202099'}`,
        }}
        />
    )
}
