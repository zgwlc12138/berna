package com.wlc.berna.common.utils;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.BeanWrapperImpl;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * DTO/DO对象处理工具类
 * 
 * @author Ji.huazhen
 */
public class BeanUtil {

	private static final Log log = LogFactory.getLog(BeanUtil.class);

	public static <T> T bean2Bean(Object srcBeanObject, Class<T> class0)
	{
		try {
			Object t = class0.newInstance();
			if (srcBeanObject instanceof List)
			{
				list2Bean((List)srcBeanObject, t, "list");
			}
			else {
				bean2Bean(srcBeanObject, t);
			}
			return (T) t;
		}
		catch (Exception e) {
			throw new RuntimeException(
					"cup.core.util.bean2bean_fail",
					e);
		}
	}
	public static void list2Bean(List<?> srcBeanObject, Object destBeanObject, String listPropName)
	{
		BeanWrapperImpl destBean = new BeanWrapperImpl(destBeanObject);
		destBean.setPropertyValue(listPropName, srcBeanObject);
	}

	public static void bean2Bean(Object srcBeanObject, Object destBeanObject)
	{
		BeanWrapperImpl srcBean = new BeanWrapperImpl(srcBeanObject);
		BeanWrapperImpl destBean = new BeanWrapperImpl(destBeanObject);

		PropertyDescriptor[] destDesc = destBean.getPropertyDescriptors();
		try
		{
			for (int i = 0; i < destDesc.length; ++i)
			{
				String name = destDesc[i].getName();

				if ((!(destBean.isWritableProperty(name))) || (!(srcBean.isReadableProperty(name)))){
					continue;
				}
				Object srcValue = srcBean.getPropertyValue(name);
				if (srcValue != null) {
					destBean.setPropertyValue(name, srcValue);
				}

			}

		}
		catch (Exception e1)
		{
			throw new RuntimeException(
					"cup.core.util.bean2bean_fail",
					e1);
		}
	}

	/**
	 * @param list
	 * @param c
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static <T> List<T> copyBeanList(List list, Class<T> c) {
		List<T> returnList = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			Object o = list.get(i);
			T target = bean2Bean(o, c);
			if (target != null) {
				returnList.add(target);
			}
		}
		return returnList;
	}

	public static Object mapToObject(Map<String, Object> map, Class<?> beanClass) throws Exception {
		if (map == null){
			return null;
		}
		Object obj = beanClass.newInstance();
		BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());
		PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
		for (PropertyDescriptor property : propertyDescriptors) {
			String key = property.getName();
			if (map.containsKey(key)) {
				Object value = map.get(key);
				Method setter = property.getWriteMethod();
				setter.invoke(obj, value);
			}
		}

		return obj;
	}

	public static Map<String, Object> objectToMap(Object obj) throws Exception {
		if (obj == null){
			return null;
		}
		Map<String, Object> map = new HashMap<>(16);
		BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());
		PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
		for (PropertyDescriptor property : propertyDescriptors) {
			String key = property.getName();
			if (key.compareToIgnoreCase("class") == 0) {
				continue;
			}
			Method getter = property.getReadMethod();
			Object value = getter != null ? getter.invoke(obj) : null;
			map.put(key, value);
		}

		return map;
	}

}
