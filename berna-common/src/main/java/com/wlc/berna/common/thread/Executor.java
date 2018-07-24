package com.wlc.berna.common.thread;

public abstract interface Executor {
    public abstract void execute(Runnable paramRunnable)
            throws InterruptedException;

    public abstract void setName(String paramString);

    public abstract void start();

    public abstract void shutdown() throws InterruptedException;

    public abstract boolean isAlive();
}
