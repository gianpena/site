'use client';

import React from 'react';
import './styles.css';
export default function Card({ title,  children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    );
}