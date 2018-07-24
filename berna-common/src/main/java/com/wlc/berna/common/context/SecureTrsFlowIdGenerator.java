package com.wlc.berna.common.context;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Random;

public class SecureTrsFlowIdGenerator  implements TrsFlowIdGenerator
{

    public SecureTrsFlowIdGenerator()
    {
    }

    public String generate()
    {
        StringBuffer lsb = new StringBuffer();
        gct++;
        if(gct % 2 == 0)
        {
            long n = _randomNumberGenerator1.nextLong();
            if(n < 0L)
                n = -n;
            lsb.append(Long.toString(n, 36).toUpperCase());
            n = _randomNumberGenerator2.nextLong();
            if(n < 0L)
                n = -n;
            lsb.append(Long.toString(n, 36).toUpperCase());
        } else
        {
            long n = _randomNumberGenerator2.nextLong();
            if(n < 0L)
                n = -n;
            lsb.append(Long.toString(n, 36).toUpperCase());
            n = _randomNumberGenerator1.nextLong();
            if(n < 0L)
                n = -n;
            lsb.append(Long.toString(n, 36).toUpperCase());
        }
        StringBuffer id = new StringBuffer();
        do
        {
            if(lsb.length() == 24)
                break;
            if(lsb.length() > 24)
                lsb.deleteCharAt(0);
            else
            if(lsb.length() < 24)
                lsb.insert(0, '0');
        } while(true);
        id.append(lsb.toString());
        long timeVal = System.currentTimeMillis() / 2000L;
        timeVal %= 1679616L;
        timeVal += 1679616L;
        id.append(Long.toString(timeVal, 36).substring(1).toUpperCase());
        synchronized(SecureTrsFlowIdGenerator.class)
        {
            if(lastTimeVal != timeVal)
            {
                lastTimeVal = timeVal;
                counter = 0;
            }
            counter++;
        }
        id.append(Long.toString(counter, 36));
        return id.toString();
    }

    public static void main(String args[])
    {
        SecureTrsFlowIdGenerator g = new SecureTrsFlowIdGenerator();
        for(int i = 0; i < 100; i++)
            System.err.println(g.generate());

    }

    private static Random _randomNumberGenerator1;
    private static Random _randomNumberGenerator2;
    private static int gct = 0;
    private static int counter = 0;
    private static long lastTimeVal = 0L;
    protected static final int DIGIT_BASE = 36;
    protected static final long MAX_SESSION_LIFESPAN_TICS = 1679616L;
    protected static final long TIC_DIFFERENCE = 2000L;

    static
    {
        try
        {
            _randomNumberGenerator1 = SecureRandom.getInstance("SHA1PRNG");
            _randomNumberGenerator2 = SecureRandom.getInstance("SHA1PRNG");
        }
        catch(NoSuchAlgorithmException e)
        {
            _randomNumberGenerator1 = new SecureRandom();
            _randomNumberGenerator2 = new SecureRandom();
        }
    }
}

