'use client';

import React from 'react';
import './styles.css';
export default function Card({ title,  children }: { title: string | React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="card">
            {typeof title === 'string' ? (
                <h2 className="card-title">{title}</h2>
            ) : (
                title
            )}
            <div className="card-content">{children}</div>
        </div>
    );
}