package com.wlc.berna.common.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.UnsupportedEncodingException;
import java.util.*;
import java.util.Map.Entry;


/**
 * 字符串工具类
 * @author zhenhuawang
 *
 */
public class StringUtil {
    public static final String EMPTY = "";
    public static final String SPACE = " ";

    public static final String ISO_8859_1 = "ISO-8859-1";
    public static final String UTF_8 = "UTF-8";
    public static final String GBK = "GBK";

    private static Random random = new Random();

    /** 用于随机选的数字 */
    private static final String BASE_NUMBER = "0123456789";
    /** 用于随机选的字符 */
    private static final String BASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
    /** 用于随机选的字符和数字 */
    private static final String BASE_CHAR_NUMBER = BASE_CHAR + BASE_NUMBER;

    private static Logger logger = LoggerFactory.getLogger(StringUtil.class);

    /** 排序字符串 */
    private static final String  ORDER_STR = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

    /**
     * 首字母变小写
     */
    public static String firstCharToLowerCase(String str) {
        Character firstChar = str.charAt(0);
        String tail = str.substring(1);
        str = Character.toLowerCase(firstChar) + tail;
        return str;
    }

    /**
     * 首字母变大写
     */
    public static String firstCharToUpperCase(String str) {
        Character firstChar = str.charAt(0);
        String tail = str.substring(1);
        str = Character.toUpperCase(firstChar) + tail;
        return str;
    }

    /**
     * 字符串为 null 或者为 "" 时返回 true
     */
    public static boolean isBlank(String str) {
        return str == null || "".equals(str.trim()) ? true : false;
    }

    public static boolean isNotBlank(String str) {
        return !isBlank(str);
    }

    /**
     * 所有字符串都不为空 或者"" 时返回true
     * @param strs
     * @return
     */
    public static boolean notBlank(String... strs) {
        if (strs == null)
            return false;
        for (String str : strs)
            if (str == null || "".equals(str.trim()))
                return false;
        return true;
    }
    public static String[] splitByNum(String str){
        String[] s=new String[str.length()];
        for (int i=0;i<str.length();i++){
            s[i]=str.substring(i,i+1);
        }
        return s;
    }

    /**
     * 所有对象不为null ，返回true
     * @param paras
     * @return
     */
    public static boolean notNull(Object... paras) {
        if (paras == null)
            return false;
        for (Object obj : paras)
            if (obj == null)
                return false;
        return true;
    }

    /**
     * 两个字符串比较
     * @param str1
     * @param str2
     * @return 不相同 false，相同 true
     */
    public static boolean equals(String str1, String str2) {
        if (str1 == null) {
            if (str2 != null)
                return false;
        } else if (!str1.equals(str2))
            return false;
        return true;
    }

    /**
     *
     * @param str
     * @param remove
     * @return
     */
    public static String removeEnd(String str, String remove) {
        if (isBlank(str) || isBlank(remove)) {
            return str;
        }
        if (str.endsWith(remove)) {
            return str.substring(0, str.length() - remove.length());
        }
        return str;
    }

    public static String defaultString(final String str) {
        return str == null ? EMPTY : str;
    }

    /**
     * 取卡号前四位和后四位，中间填四个*
     * @return
     */
    public static String getFormatCardNo(String string) {
        String cardNo= string.trim();
        String lastNo = cardNo.substring(cardNo.length()-4);
        String firstNo = cardNo.substring(0,4);
        String formatCardNo = firstNo + "*****" + lastNo;
        return formatCardNo;
    }

    /**
     * 替换中间字符为*号
     * @param oleStr 要替换的
     * @param firstLen
     * @param lastLen
     * @return
     */
    public static String replaceStr(String oleStr, int firstLen, int lastLen) {
        if (isBlank(oleStr)) {
            return "";
        }
        String newStr = oleStr.trim();
        int len = newStr.length() - firstLen - lastLen;
        if (len <= 0) {
            return oleStr;
        }
        StringBuffer sb = new StringBuffer();
        String lastStr = newStr.substring(newStr.length() - lastLen);
        sb.append(newStr.substring(0, firstLen));
        for (int i = 0; i < len; i++) {
            sb.append("*");
        }
        sb.append(lastStr);
        return sb.toString();
    }

    public static int convertToInt(String intStr, int defValue) {
        if (isBlank(intStr)) {
            return defValue;
        }
        int i = defValue;
        try {
            i = Integer.parseInt(intStr);
        } catch (Exception e) {
            i = defValue;
        }
        return i;
    }

    /**
     * 二行制转字符串
     * @param b
     * @return
     */
    public static String byte2hex(byte[] b)
    {
        String hs = "";
        String stmp = "";
        for (int n = 0; n < b.length; n++) {
            stmp = (Integer.toHexString(b[n] & 0XFF));
            if (stmp.length() == 1)
                hs = hs + "0" + stmp;
            else
                hs = hs + stmp;
            if (n < b.length - 1)
                hs = hs + "";
        }
        return hs.toUpperCase();
    }

    /**
     * 填充字符串
     * @param string
     * @param filler
     * @param totalLength
     * @param atEnd
     * @param encoding
     * @return
     */
    public static String fillStr(String string, char filler, int totalLength,boolean atEnd,String encoding) {
        byte[] tempbyte = null;
        try {
            tempbyte = string.getBytes(encoding);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("fillStr get bytes error.",e);
        }

        int currentLength = tempbyte.length;
        int delta = totalLength - currentLength;
        for (int i = 0; i < delta; i++) {
            if (atEnd)
                string += filler;
            else
                string = filler + string;
        }
        return string;

    }

    /**
     * 填充字符串
     * @param string
     * @param filler
     * @param totalLength
     * @param atEnd
     * @return
     */
    public static String fillStr(String string, char filler, int totalLength,boolean atEnd) {
        byte[] tempbyte = string.getBytes();
        int currentLength = tempbyte.length;
        int delta = totalLength - currentLength;
        for (int i = 0; i < delta; i++) {
            if (atEnd)
                string += filler;
            else
                string = filler + string;
        }
        return string;

    }

    /**
     * 转换字符串的字符集编码
     *
     * @param source
     *            字符串
     * @param srcCharset
     *            源字符集，默认ISO-8859-1
     * @param newCharset
     *            目标字符集，默认UTF-8
     * @return 转换后的字符集
     */
    public static String convertCharset(String source, String srcCharset, String newCharset) {
        if (StringUtil.isBlank(srcCharset)) {
            srcCharset = ISO_8859_1;
        }

        if (StringUtil.isBlank(newCharset)) {
            srcCharset = UTF_8;
        }

        if (StringUtil.isBlank(source) || srcCharset.equals(newCharset)) {
            return source;
        }
        try {
            return new String(source.getBytes(srcCharset), newCharset);
        } catch (UnsupportedEncodingException unex) {
            throw new RuntimeException(unex);
        }
    }

    public static String convertCharset(String source, String newCharset) {
        if (StringUtil.isBlank(source)) {
            return source;
        }
        try {
            return new String(source.getBytes(), newCharset);
        } catch (UnsupportedEncodingException unex) {
            throw new RuntimeException(unex);
        }
    }

    /**
     * 编码字符串
     *
     * @param str 字符串
     * @param charset 字符集
     * @return 编码后的字节码
     */
    public static byte[] encode(String str, String charset) {
        if (str == null) {
            return null;
        }

        try {
            return str.getBytes(charset);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(format("Charset [{}] unsupported!", charset));
        }
    }

    /**
     * 解码字节码
     *
     * @param data 字符串
     * @param charset 字符集
     * @return 解码后的字符串
     */
    public static String decode(byte[] data, String charset) {
        if (data == null) {
            return null;
        }

        try {
            return new String(data, charset);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(format("Charset [{}] unsupported!", charset));
        }
    }

    /**
     * 格式化文本
     *
     * @param template 文本模板，被替换的部分用 {} 表示
     * @param values 参数值
     * @return 格式化后的文本
     */
    public static String format(String template, Object... values) {
        if (isBlank(template)) {
            return template;
        }

        final StringBuilder sb = new StringBuilder();
        final int length = template.length();

        int valueIndex = 0;
        char currentChar;
        for (int i = 0; i < length; i++) {
            if (valueIndex >= values.length) {
                sb.append(sub(template, i, length));
                break;
            }

            currentChar = template.charAt(i);
            if (currentChar == '{') {
                final char nextChar = template.charAt(++i);
                if (nextChar == '}') {
                    Object obj = values[valueIndex++];
                    if (obj == null) {
                        obj = "null";
                    }
                    sb.append(obj);
                } else {
                    sb.append('{').append(nextChar);
                }
            } else {
                sb.append(currentChar);
            }

        }

        return sb.toString();
    }

    /**
     * 格式化文本
     *
     * @param template 文本模板，被替换的部分用 {key} 表示
     * @param map 参数值对
     * @return 格式化后的文本
     */
    public static String format(String template, Map<?, ?> map) {
        if (null == map || map.isEmpty()) {
            return template;
        }

        for (Entry<?, ?> entry : map.entrySet()) {
            template = template.replace("{" + entry.getKey() + "}", entry.getValue().toString());
        }
        return template;
    }

    /**
     * 改进JDK subString<br>
     * index从0开始计算，最后一个字符为-1<br>
     * 如果from和to位置一样，返回 "" example: abcdefgh 2 3 -> c abcdefgh 2 -3 -> cde
     *
     * @param string String
     * @param fromIndex 开始的index（包括）
     * @param toIndex 结束的index（不包括）
     * @return 字串
     */
    public static String sub(String string, int fromIndex, int toIndex) {
        int len = string.length();

        if (fromIndex < 0) {
            fromIndex = len + fromIndex;

            if (toIndex == 0) {
                toIndex = len;
            }
        }

        if (toIndex < 0) {
            toIndex = len + toIndex;
        }

        if (toIndex < fromIndex) {
            int tmp = fromIndex;
            fromIndex = toIndex;
            toIndex = tmp;
        }

        if (fromIndex == toIndex) {
            return EMPTY;
        }

        char[] strArray = string.toCharArray();
        char[] newStrArray = Arrays.copyOfRange(strArray, fromIndex, toIndex);
        return new String(newStrArray);
    }

    /**
     * 包装指定字符串
     * @param str 被包装的字符串
     * @param prefix 前缀
     * @param suffix 后缀
     * @return 包装后的字符串
     */
    public static String wrap(String str, String prefix, String suffix) {
        return format("{}{}{}", getNotNull(prefix), getNotNull(str), getNotNull(suffix));
    }

    public static String getNotNull(String str) {
        return str == null ? "" : str;
    }


    /**
     * 生成get方法名<br/>
     * @param fieldName
     * @return
     */
    public static String genGetter(String fieldName) {
        if(isBlank(fieldName)){
            return null;
        }

        return "get" + firstCharToUpperCase(fieldName);
    }

    /**
     * 生成set方法名<br/>
     * 例如：name 返回 setName
     *
     * @param fieldName 属性名
     * @return setXxx
     */
    public static String genSetter(String fieldName) {
        if(isBlank(fieldName)){
            return null;
        }

        return "set" + firstCharToUpperCase(fieldName);
    }

    /**
     * 包含中文的截取，一个中文长度为2
     * @param string
     * @param length 长度
     * @return 字串
     */
    public static String subStr(String string, int length) {
        if (isBlank(string)) {
            return EMPTY;
        }

        char[] newStrArray = null;
        int count = 0;
        int offset = 0;
        char[] strArray = string.toCharArray();
        for (int i = 0; i < strArray.length; i++) {
            if (strArray[i] > 256) {
                offset = 2;
                count += 2;
            } else {
                offset = 1;
                count++;
            }
            if (count == length) {
                newStrArray = Arrays.copyOfRange(strArray, 0, i + 1);
                break;
            } else if ((count == length + 1 && offset == 2)) {
                newStrArray = Arrays.copyOfRange(strArray, 0, i);
                break;
            }
        }
        if(length > count){
            newStrArray = Arrays.copyOfRange(strArray, 0, strArray.length);
        }
        return new String(newStrArray);
    }


    /**
     * 获取字符串的长度，如果有中文，则每个中文字符计为2位
     *
     * @param value
     *            指定的字符串
     * @return 字符串的长度
     */
    public static int chineseLen(String value) {
        int valueLength = 0;
        String chinese = "[\u0391-\uFFE5]";

        for (int i = 0; i < value.length(); i++) {
            String temp = value.substring(i, i + 1);
            if (temp.matches(chinese)) {
                valueLength += 2;
            } else {
                valueLength += 1;
            }
        }
        return valueLength;
    }


    /**
     * 获得一个随机的字符串（包含数字和字符）
     *
     * @param length 字符串的长度
     * @return 随机字符串
     */
    public static String genRandom(int length) {
        return genRandom(BASE_CHAR_NUMBER, length);
    }

    /**
     * 获得一个只包含数字的字符串
     *
     * @param length 字符串的长度
     * @return 随机字符串
     */
    public static String genRandomNum(int length) {
        return genRandom(BASE_NUMBER, length);
    }

    /**
     * 获得一个只包含字母的字符串
     * @param length
     * @return
     */
    public static String genRandomStr(int length) {
        return genRandom(BASE_CHAR, length);
    }

    /**
     * 获得一个随机的字符串
     *
     * @param baseString 随机字符选取的样本
     * @param length 字符串的长度
     * @return 随机字符串
     */
    public static String genRandom(String baseString, int length) {
        StringBuffer sb = new StringBuffer();
        if (length < 1) {
            length = 1;
        }
        int baseLength = baseString.length();
        for (int i = 0; i < length; i++) {
            int number = random.nextInt(baseLength);
            sb.append(baseString.charAt(number));
        }
        return sb.toString();
    }

    /**
     * 字符串转换成 Integer
     * @param value 需要转换的值
     * @param defaultValue 转换失败默认值
     * @return
     */
    public static Integer toInt(String value, Integer defaultValue) {
        if (isBlank(value)) {
            logger.error(format("Str:{}. is null,can not be converted to int", value));
            return defaultValue;
        }
        try {
            return Integer.parseInt(value);
        } catch (Exception e) {
            logger.error(format("Str:{}. is null,can not be converted to int", value));
            return defaultValue;
        }

    }

    public static int toInt(String value) {
        Integer i = toInt(value, 0);
        return i.intValue();
    }

    /**
     * 字符串转换成 Boolean
     * @param value 需要转换的值
     * @param defaultValue 转换失败默认值
     * @return
     */
    public static Boolean toBoolean(String value, Boolean defaultValue) {
        if (isBlank(value)) {
            logger.error(format("Str:{}. is null,can not be converted to Boolean", value));
            return defaultValue;
        }
        if ("1".equals(value) || "true".equalsIgnoreCase(value)) {
            return Boolean.TRUE;
        } else if ("0".equals(value) || "false".equalsIgnoreCase(value)) {
            return Boolean.FALSE;
        } else {
            return defaultValue;
        }
    }

    /**
     * 送信审拆分数据字典值专用
     * @param str
     * @return
     */
    public static String toAps(String str){
        if(isBlank(str)){
            return EMPTY;
        }

        if(str.contains("-")){
            return str.split("-")[1];
        }else {
            return str;
        }

    }

    /**
     * 替换字符串
     * @param src
     * @param oldChar
     * @param newChar
     * @return
     */
    public static String replace(String src, String oldChar, String newChar) {
        if (isBlank(src)) {
            return EMPTY;
        }
        if (oldChar == null || newChar == null) {
            return src;
        }
        return src.replace(oldChar, newChar);
    }

    /**
     * 是否全部由数据组成
     * @param val
     * @return
     */
    public static boolean isNum(String val) {
        return val == null || "".equals(val) ? false : val.matches("^[0-9]*$");
    }

    public static boolean isChinese(String val) {
        return val == null || "".equals(val) ? false : val.matches("([\u4e00-\u9fa5]+)");
    }
    public static boolean isEnglish(String val) {
        return val == null || "".equals(val) ? false : val.matches("([A-Z ]+)");
    }

    /**
     * 获取UUID by jdk
     * @return
     */
    public static String genUuid(boolean is32bit){
        String uuid = UUID.randomUUID().toString();
        if(is32bit){
            return uuid.toString().replace("-", "");
        }
        return uuid;
    }

    public static String trim(String str){
        if(isBlank(str)){
            return EMPTY;
        }else {
            return str.trim();
        }
    }

    /**
     * splitAddr("a省b市c区d号") return {area=c区, country=d号, prv=b省, city=a市}
     * splitAddr("b市c区d号") return 如果是直辖市  {area=c区, country=d号, prv=b省, city=b市}
     * @param addr
     * @return
     */
    public static Map<String, String> splitAddr(String... addr) {
        Map<String, String> addMap = new HashMap<String, String>();
        if (addr == null || addr.length == 0) {
            return addMap;
        }
        StringBuilder builder = new StringBuilder();
        for (String add : addr) {
            builder.append(trim(add));
        }

        if (builder.length() == 0) {
            return addMap;
        }

        String addrStr = builder.toString();

        int provincesIdx = addrStr.indexOf("省");
        if (provincesIdx > 0) {
            String prv = trim(addrStr.substring(0, provincesIdx + 1));
            addMap.put("prv", prv);
            addrStr = addrStr.substring(provincesIdx + 1);
        } else if (addrStr.contains("北京") || addrStr.contains("天津") || addrStr.contains("上海") || addrStr.contains("重庆")) {
            int cityIdx = addrStr.indexOf("市");
            if (cityIdx > 0) {
                String city = trim(addrStr.substring(0, cityIdx + 1));
                addMap.put("prv", city);
                addrStr = addrStr.substring(cityIdx + 1);

                if (addrStr.indexOf("市") <= 0) { // 处理中出现一个市的情况
                    addMap.put("city", city);
                }
            }
        }

        int cityIndex = addrStr.indexOf("市");
        if (cityIndex > 0) {
            String city = trim(addrStr.substring(0, cityIndex + 1));
            addMap.put("city", city);
            addrStr = addrStr.substring(cityIndex + 1);
        }

        int areaIdx = addrStr.indexOf("区");
        if (areaIdx > 0) {
            String area = trim(addrStr.substring(0, areaIdx + 1));
            addMap.put("area", area);
            addrStr = addrStr.substring(areaIdx + 1);
        }
        if (addrStr.length() > 0) {
            addMap.put("country", addrStr);
        } else {
            addMap.put("country", EMPTY);
        }

        if (!addMap.containsKey("prv")) {
            addMap.put("prv", EMPTY);
        }
        if (!addMap.containsKey("city")) {
            addMap.put("city", EMPTY);
        }
        if (!addMap.containsKey("area")) {
            addMap.put("area", EMPTY);
        }

        return addMap;
    }


    /**
     * 多个对象拼接，为空不拼接
     * @param str
     * @return
     */
    public static String append(Object... str) {
        StringBuilder sb = new StringBuilder();
        for (Object s : str) {
            if (notNull(s)) {
                sb.append(s);
            }
        }
        return sb.toString();
    }

    /**
     * 判断是否有顺序
     * @param str 判断字符串，str为空时，返回 false
     * @return
     */
    public static boolean isOrder(String str) {
        if (isBlank(str)) {
            return false;
        }
        if (!str.matches("((\\d)|([a-z])|([A-Z]))+")) {
            return false;
        }
        return ORDER_STR.contains(str);
    }

    /**
     * 判断是否相同
     * @param str 判断字符串，str为空时，返回 false
     * @return
     */
    public static boolean isSame(String str) {
        if(isBlank(str)){
            return false;
        }

        String regex = str.substring(0, 1) + "{" + str.length() + "}";
        return str.matches(regex);
    }


    public static void main(String[] args) {
        System.out.println(StringUtil.splitAddr("上海市上海市    ","浦东新区  ","顾唐路1899号                                    "," 银联研发中心东楼12层  ",""));
        System.out.println(StringUtil.splitAddr("广东省广州市越秀区中山六路109"));
        System.out.println(StringUtil.splitAddr("北京市丰台区南四环西路188号17区15号"));
        System.out.println(StringUtil.splitAddr("上海市浦东新区顾唐路1899号银联研发中心东楼12层"));
        System.out.println(isOrder("123456789"));
        System.out.println(isSame("111111111"));
    }
}

