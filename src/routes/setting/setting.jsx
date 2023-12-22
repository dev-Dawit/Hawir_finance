// import { useState, useEffect } from "react";
// import { Form, Input, message } from "antd";
// import axios from "axios";
// import SaveIcon from '@mui/icons-material/Save';import LocalDataGrid from "../../components/shared/data grid/dataGrid";
// import { Box, Button, Stack } from "@mui/material";
// import { Label } from "@mui/icons-material";


// const Setting = () => {
//   const [selectedSetting, setSelectedSetting] = useState(null);
//   const [detailModalVisible, setDetailModalVisible] = useState(false);
//   const [setting, setSetting] = useState([]);
//   const [form] = Form.useForm();

  
 
//   const fetchSetting = async () => {
//       try {
//           const response = await axios.get('http://hawir.abruthtech.com:4000/api/setting/getSettingList');
//           if (Array.isArray(response.data)) {
//           setSetting(response.data);
//           console.log("setting", response.data)
//           } else {
//           setSetting([]);
//           }
//       } catch (error) {
//           console.error('Error fetching Setting:', error);
//           setSetting([]);
//       }
//   };

//   useEffect(() => {
//     form.setFieldsValue({
//       setting_id: setting.setting_id || '',
//       setting_key: setting.setting_key || '',
//       setting_family: setting.setting_family || '',
//       setting_value: setting.setting_value || '',
//     });
//     fetchSetting();
//   }, [form]);

//   const handleSave = async (setting) => {
//     try {
//       const payload = {
//         setting_id: setting.setting_id || "",
//         setting_key: setting.setting_key,
//         setting_family: setting.setting_family,
//         setting_value: setting.setting_value,
//       };
  
//       // Make API call to update the setting
//       await axios.post('http://hawir.abruthtech.com:4000/api/setting/updateSetting', payload);
  
//       message.success('Setting updated successfully.');
  
      
//     } catch (error) {
//       console.error('Error updating Setting:', error);
//       message.error('Failed to update setting. Please try again.');
//     }
//   };
  

//   return (
//     <Box sx={{ backgroundColor: "white", p: 1, ml: -2 }}>
//       <Form form={form} layout="vertical">
//         <Form.Item
//           name= "setting_value"
//           label='setting'
//         >
//           <Input />
//         </Form.Item>    
//       </Form>
//     </Box>
//   );
// };

// export default Setting;





// import { useState, useEffect } from "react";
// import { Form, Input, message } from "antd";
// import axios from "axios";
// import { Box, Button, Stack } from "@mui/material";

// const Setting = () => {
//   const [setting, setSetting] = useState([]);
//   const [form] = Form.useForm();

//   const fetchSetting = async () => {
//     try {
//       const response = await axios.get('http://hawir.abruthtech.com:4000/api/setting/getSettingList');
//       if (Array.isArray(response.data)) {
//         setSetting(response.data);
//       } else {
//         setSetting([]);
//       }
//     } catch (error) {
//       console.error('Error fetching Setting:', error);
//       setSetting([]);
//     }
//   };

//   useEffect(() => {
//     fetchSetting();
//   }, []);

//   const handleSave = async (values) => {
//     try {
//       // Get the form values
//       const values = await form.validateFields();
          
//       // Create an array of objects with the required fields
//       const payload = Object.keys(values).map((key) => ({
//         setting_id: key, // Assuming key is the setting_id
//         setting_family: "your_setting_family", // Replace with the appropriate value
//         setting_key: key,
//         setting_value: values[key],
//       }));

//       // Make API call to update the setting
//       await axios.post('http://hawir.abruthtech.com:4000/api/setting/updateSetting', payload);

//       message.success('Setting updated successfully.');
//     } catch (error) {
//       console.error('Error updating Setting:', error);
//       message.error('Failed to update setting. Please try again.');
//     }
//   };

//   return (
//     <Box sx={{ backgroundColor: "white", p: 1, ml: -2 }}>
//       <Form form={form} layout="vertical" onFinish={handleSave}>
//         {setting.map((settingItem) => (
//           <Form.Item
//             key={settingItem.setting_key}
//             name={settingItem.setting_key}
//             label={settingItem.setting_key}
//             initialValue={settingItem.setting_value}
//           >
//             <Input />
//           </Form.Item>
//         ))}
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Save
//           </Button>
//         </Form.Item>
//       </Form>
//     </Box>
//   );
// };

// export default Setting;

















import { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Space } from "antd";
import axios from "axios";
import { Box, Button, Paper} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const Setting = () => {
  const [setting, setSetting] = useState([]);
  const [form] = Form.useForm();

  const fetchSetting = async () => {
    try {
      const response = await axios.get('http://hawir.abruthtech.com:4000/api/setting/getSettingList');
      if (Array.isArray(response.data)) {
        setSetting(response.data);
      } else {
        setSetting([]);
      }
    } catch (error) {
      console.error('Error fetching Setting:', error);
      setSetting([]);
    }
  };

  useEffect(() => {
    fetchSetting();
  }, []);

  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      const updatePromises = Object.keys(values).map(async (settingId) => {
        const settingData = {
          setting_id: settingId,
          setting_key: values[settingId].setting_key,
          setting_family: values[settingId].setting_family,
          setting_value: values[settingId].setting_value,
        };

        await axios.post('http://hawir.abruthtech.com:4000/api/setting/updateSetting', settingData);
      });

      await Promise.all(updatePromises);

      message.success('Settings updated successfully.');

      fetchSetting();
    } catch (error) {
      console.error('Error updating Settings:', error);
      message.error('Failed to update settings. Please try again.');
    }
  };

  return (
    <Box sx={{ backgroundColor: "white", p: 4, ml: -2 }}>
      <Form form={form} layout="vertical">
        {setting.map((settingItem, index) => (
          <Box key={settingItem.setting_id} mb={4} borderBottom={index !== setting.length - 1 ? "1px solid #eee" : "none"}>
            <Paper sx={{ padding: 2, marginTop: 2 }} elevation={3}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Form.Item
                  name={[settingItem.setting_id, "setting_key"]}
                  label="Setting Key"
                  initialValue={settingItem.setting_key}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={[settingItem.setting_id, "setting_family"]}
                  label="Setting Family"
                  initialValue={settingItem.setting_family}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={[settingItem.setting_id, "setting_value"]}
                  label="Setting Value"
                  initialValue={settingItem.setting_value}
                >
                  <Input />
                </Form.Item>
              </Space>
            </Paper>
          </Box>
        ))}
        <Button onClick={handleSave} startIcon={<SaveIcon />} variant="outlined">
          Save
        </Button>
      </Form>
    </Box>
  );
};

export default Setting;

