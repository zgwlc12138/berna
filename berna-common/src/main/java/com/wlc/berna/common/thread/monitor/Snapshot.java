package com.wlc.berna.common.thread.monitor;

import java.util.Map;

public abstract interface Snapshot {
    public static final String TRANSPORT = "Transport";
    public static final String THREADPOOL = "ThreadPool";

    public abstract Map getSnapshotData();

    public abstract String getSnapshotName();

    public abstract void registerSnapshotNotifier(
            SnapshotNotifier paramSnapshotNotifier);

    public abstract void unregisterSnapshotNotifier(
            SnapshotNotifier paramSnapshotNotifier);

    public abstract String getSnapshotType();

    public abstract void setOpenSnapshot(boolean paramBoolean);

    public abstract boolean isOpenSnapshot();

    public abstract void setMonitor(boolean paramBoolean);

    public abstract boolean isMonitor();
}