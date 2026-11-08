'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Wifi, WifiOff, Users, Activity, Server, AlertTriangle, RefreshCw } from 'lucide-react';
import { SITE } from '@/config/site';

interface ServerStatusData {
  online: boolean;
  players?: { online: number; max: number; list?: string[] };
  version?: string;
  motd?: string;
  latency?: number;
  error?: string;
}

export function ServerStatus() {
  const [status, setStatus] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(
        `https://api.mcstatus.io/v2/status/java/${SITE.ip}`,
        { signal: controller.signal }
      );

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      setStatus({
        online: data.online,
        players: data.players ? { online: data.players.online, max: data.players.max, list: data.players.list } : undefined,
        version: data.version?.name_clean || data.version?.name,
        motd: data.motd?.clean || data.motd?.raw,
        latency: data.latency,
      });
    } catch (err) {
      setStatus({
        online: false,
        error: err instanceof Error ? err.message : 'Unknown error',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  if (loading && !status) {
    return (
      <div className="card flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-dark-800 flex items-center justify-center animate-pulse">
            <Server className="w-5 h-5 text-slate-500" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <div className="skeleton h-4 w-32 rounded" />
            <div className="skeleton h-3 w-48 rounded" />
          </div>
        </div>
        <div className="ml-auto skeleton h-8 w-24 rounded-xl" />
      </div>
    );
  }

  if (!status) return null;

  const isOnline = status.online;

  return (
    <motion.div
      className="card flex items-center gap-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`p-3 rounded-xl flex items-center justify-center ${isOnline ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
        {isOnline ? (
          <>
            <Wifi className="w-6 h-6" aria-hidden="true" />
            <motion.div
              className="absolute inset-0 rounded-xl bg-green-500/30"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              aria-hidden="true"
            />
          </>
        ) : (
          <WifiOff className="w-6 h-6" aria-hidden="true" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <span className={`font-display font-semibold text-lg ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
            {isOnline ? 'ONLINE' : 'OFFLINE'}
          </span>
          {isOnline && status.latency && (
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-dark-800 border border-dark-700 text-slate-400">
              {status.latency}ms
            </span>
          )}
          {status.version && (
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-dark-800 border border-dark-700 text-slate-500">
              {status.version}
            </span>
          )}
        </div>
        {isOnline && status.players && (
          <div className="mt-2 flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span className="font-mono text-white">{status.players.online}</span>
              <span className="text-slate-600">/</span>
              <span className="font-mono">{status.players.max}</span>
              <span>pemain</span>
            </span>
            {status.motd && (
              <span className="truncate max-w-[300px] italic">"{status.motd}"</span>
            )}
          </div>
        )}
        {!isOnline && status.error && (
          <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
            <AlertTriangle className="w-4 h-4" aria-hidden="true" />
            <span>Gagal terhubung: {status.error}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        {isOnline && (
          <a
            href={`https://mcsrvstat.us/server/${SITE.ip}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm px-4 py-2"
          >
            <Activity className="w-4 h-4" aria-hidden="true" />
            Detail
          </a>
        )}
        <button
          onClick={fetchStatus}
          disabled={loading}
          className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 disabled:opacity-50"
          aria-label="Refresh status server"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
}