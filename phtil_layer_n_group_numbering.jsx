///phtil_layer_n_group_numbering
#target photoshop

if (app.documents.length > 0)
{
	Make_dialog();
}

//메인 UI
function Make_dialog()
{
	//레이어 넘버링 메인 다이얼로그
	mainDlg = new Window('dialog', 'layer & group numbering');

	//넘버링 패널
	var _w = 184;
	var _h = 200;
	var _x1 = 10;
	var _y1 = 4;
	var _x2 = _x1 + _w;
	var _y2 = _y1 + _h;
	mainDlg.NRPnl = mainDlg.add('panel', [_x1, _y1, _x2, _y2], '레이어 숫자 변경 - 1.0');

	//도움말
	var hTextStr = '\n제작자  phtil\n\n버그를 발견하거나 좋은 기능 아이디어가 있으면, 아래 이메일 주소로 보내주세요. :)\n\nphtil@naver.com\n';
	mainDlg.NRPnl.hText = mainDlg.NRPnl.add('statictext',  mainDlg.NRPnl.bounds, hTextStr,{ multiline  : 10});
	mainDlg.NRPnl.hText.bounds.top = mainDlg.NRPnl.hText.bounds.top + 16;
	mainDlg.NRPnl.hText.bounds.right = mainDlg.NRPnl.hText.bounds.right - 20;
	mainDlg.NRPnl.hText.visible = false;
	
	////////////정렬 패널
	var _x1 = 15;
	var _y1 = 20;
	var _x2 = _x1 + 70;
	var _y2 = _y1 + 70;
	mainDlg.NRPnl.SortPnl = mainDlg.NRPnl.add('panel', [_x1, _y1, _x2, _y2], '정렬');
	
	var _x1 = 5;
	var _y1 = 10;
	var _x2 = _x1 + 62;
	var _y2 = _y1 + 20;
	mainDlg.NRPnl.SortPnl.RBUpper = mainDlg.NRPnl.SortPnl.add('radiobutton', [_x1, _y1, _x2, _y2], '오름순');
	mainDlg.NRPnl.SortPnl.RBUpper.value = true;
	
	var _x1 = mainDlg.NRPnl.SortPnl.RBUpper.bounds.left;
	var _y1 = mainDlg.NRPnl.SortPnl.RBUpper.bounds.top + 20;
	var _x2 = mainDlg.NRPnl.SortPnl.RBUpper.bounds.right;
	var _y2 = _y2 + 20;
	mainDlg.NRPnl.SortPnl.RBLower = mainDlg.NRPnl.SortPnl.add('radiobutton', [_x1, _y1, _x2, _y2], '내림순');
	
	//레이어 패널
	var _x1 = 95;
	var _y1 = 20;
	var _x2 = _x1 + 70;
	var _y2 = _y1 + 70;
	mainDlg.NRPnl.NRLayerPnl = mainDlg.NRPnl.add('panel', [_x1, _y1, _x2, _y2], '종류');
	mainDlg.NRPnl.NRLayerPnl.selectCancelLayerType = 'group';
	
	var _x1 = 5;
	var _y1 = 10;
	var _x2 = _x1 + 62;
	var _y2 = _y1 + 20;
	mainDlg.NRPnl.NRLayerPnl.RBLayer = mainDlg.NRPnl.NRLayerPnl.add('radiobutton', [_x1, _y1, _x2, _y2], '레이어');
	mainDlg.NRPnl.NRLayerPnl.RBLayer.value = true;
	//기능
	mainDlg.NRPnl.NRLayerPnl.RBLayer.onClick = function()
	{
		mainDlg.NRPnl.NRLayerPnl.selectCancelLayerType = 'group';
	}
	
	var _x1 = mainDlg.NRPnl.NRLayerPnl.RBLayer.bounds.left;
	var _y1 = mainDlg.NRPnl.NRLayerPnl.RBLayer.bounds.top + 20;
	var _x2 = mainDlg.NRPnl.NRLayerPnl.RBLayer.bounds.right;
	var _y2 = _y1 + 20;
	mainDlg.NRPnl.NRLayerPnl.RBGroup = mainDlg.NRPnl.NRLayerPnl.add('radiobutton', [_x1, _y1, _x2, _y2], '그룹');
	//기능
	mainDlg.NRPnl.NRLayerPnl.RBGroup.onClick = function()
	{
		mainDlg.NRPnl.NRLayerPnl.selectCancelLayerType = 'layer';
	}

    //레이어 이름 입력 부분
	var _w = mainDlg.NRPnl.bounds.right - mainDlg.NRPnl.bounds.left -2;
	var _x1 = (_w * 0.5) ;
	var _y2 = mainDlg.NRPnl.NRLayerPnl.bounds.bottom + 30;
	var _y1 = _y2 - 25
	var _x2 = (_w * 0.5) +(  (_w * 0.5) * 0.8 );
	mainDlg.NRPnl.lText = mainDlg.NRPnl.add('statictext', [18, _y1 + 5, _x1, _y2] , '레이어 이름 :'); //텍스트
	mainDlg.NRPnl.layerText = mainDlg.NRPnl.add('edittext', [_x1 + 5, _y1, _x2, _y2], ''); //입력 폼
    
	//넘버 입력 부분
    //이 폼의 위치를 수정하면 확인 버튼과 취소 버튼도 자동으로 이동된다.
	var _w = mainDlg.NRPnl.bounds.right - mainDlg.NRPnl.bounds.left -2;
	var _x1 = (_w * 0.5) ;
	var _y2 = mainDlg.NRPnl.NRLayerPnl.bounds.bottom + 60;
	var _y1 = _y2 - 25
	var _x2 = (_w * 0.5) +(  (_w * 0.5) * 0.8 );
	mainDlg.NRPnl.sText = mainDlg.NRPnl.add('statictext', [18, _y1 + 5, _x1, _y2] , '시작 숫자    : '); //텍스트
	mainDlg.NRPnl.startNumText = mainDlg.NRPnl.add('edittext', [_x1 + 5, _y1, _x2, _y2], '0'); //입력 폼
	
	//확인 버튼
	var _w = 70;
	var _h = 24;
	var _x = mainDlg.NRPnl.SortPnl.bounds.left;
	var _y = mainDlg.NRPnl.startNumText.bounds.bottom + 8;
	mainDlg.NRPnl.okBtn = mainDlg.NRPnl.add ('button', [_x, _y, _x + _w, _y + _h], '확인');
	//확인 버튼 누르면 작동
	mainDlg.NRPnl.okBtn.onClick = function()
	{
		startNum = toNumber( mainDlg.NRPnl.startNumText.text );
		beginName = mainDlg.NRPnl.layerText.text;
         //alert(beginName)
		if( isNaN(startNum) ) alert( "시작 숫자를 적어주세요." );
		else 
        {
			var prefs = {};
			prefs.countFrom = 1;
			prefs.zeroPadding = 3;
			prefs.nameSeparator = ' ';
			prefs.topToBottom = false;
			if( mainDlg.NRPnl.SortPnl.RBUpper.value ) prefs.topToBottom = true;
			
			renameLayers(activeDocument, prefs, beginName, startNum );
			mainDlg.close(2);
			return true;
		}
	}
	
	//취소 버튼
	var _w = 70;
	var _h = 24;
	var _x = mainDlg.NRPnl.NRLayerPnl.bounds.left;
	var _y = mainDlg.NRPnl.okBtn.bounds.top;
	mainDlg.NRPnl.cancelBtn = mainDlg.NRPnl.add ('button', [_x, _y, _x + _w, _y + _h], '취소');
	//취소 버튼 기능 정의
	mainDlg.NRPnl.cancelBtn.onClick = function()
	{
		mainDlg.close(2);
	}
	
	//물음표 버튼
	var _w = 16;
	var _h = 16;
	var _x = mainDlg.NRPnl.bounds.right - (_w * 2);
	var _y = 2;
	mainDlg.NRPnl.helpBtn = mainDlg.NRPnl.add ('button', [_x, _y, _x + _w, _y + _h], '?');
	var helpTgl = false;
	//물음표 버튼 기능
	mainDlg.NRPnl.helpBtn.onClick = function()
	{
		mainDlg.NRPnl.SortPnl.visible = helpTgl;
		mainDlg.NRPnl.NRLayerPnl.visible = helpTgl;
		mainDlg.NRPnl.startNumText.visible = helpTgl;
		mainDlg.NRPnl.sText.visible = helpTgl;
        mainDlg.NRPnl.layerText.visible = helpTgl;
        mainDlg.NRPnl.lText.visible = helpTgl;
		mainDlg.NRPnl.okBtn.visible = helpTgl;
		mainDlg.NRPnl.cancelBtn.visible = helpTgl;
		
		helpTgl = !helpTgl;
		mainDlg.NRPnl.hText.visible = helpTgl;
	}
	
	mainDlg.show();
}


//	배열에 들어 있는 레이어 정보에서 stringID와 같은 레이어는 배열에서 삭제
//	getSelectedLayersIndex를 이용해서 받은 "선택된 레이어 정보 배열"이  필요한 함수
function Layer_selection_cancel(selectedLayers, LyrType)
{
	if (LyrType === 'group') { LyrType = 'layerSectionStart' }
	else if (LyrType === 'layer') { LyrType = 'layerSectionContent' }
	
	var len = selectedLayers.length;
	var cancelTargetID = app.stringIDToTypeID(LyrType);
	
	for (var i = 0; i < len; i++)
	{
		if (getLayerTypeByIndex(selectedLayers[i]) == cancelTargetID)
		{
			selectedLayers.splice(i, 1);
			len--;
			i--;
		}
	}
	return selectedLayers;
}


//LayerCake Rename PhotoShop Script by Steve Derico http://www.stevederico.com
// Author: Trevor Morris (trevor@morris-photographics.com)
// Website: http://morris-photographics.com/

//선택된 레이어의 인덱스를 알려준다
function getSelectedLayersIndex(doc) 
{
	var selectedLayers = [];
	var ref = new ActionReference();
	ref.putEnumerated(cTID('Dcmn'), cTID('Ordn'), cTID('Trgt'));
	var desc = executeActionGet(ref);
	if (desc.hasKey(sTID('targetLayers'))) 
	{
		desc = desc.getList(sTID('targetLayers'));
		var c = desc.count; 
		for (var i = 0; i < c; i++) 
		{
			try 
			{
				doc.backgroundLayer;
				selectedLayers.push(desc.getReference(i).getIndex());				
			}
			catch(e) 
			{
				selectedLayers.push(desc.getReference(i).getIndex() + 1);
			}
		}
	}
	else 
	{
		var ref = new ActionReference();
		ref.putProperty(cTID('Prpr'), cTID('ItmI'));
		ref.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
		try 
		{
			doc.backgroundLayer;
			selectedLayers.push(executeActionGet(ref).getInteger(cTID('ItmI')) - 1);
		}
		catch(e) 
		{
			selectedLayers.push(executeActionGet(ref).getInteger(cTID('ItmI')));
		}
	}
	return selectedLayers;
}


//액션 레퍼런스 아이디 함수를 짧게 만들었다.
function cTID(s) { return app.charIDToTypeID(s); }
function sTID(s) { return app.stringIDToTypeID(s); }


// 레이어 이름 변환
function renameLayers(activeDoc, prefs, beginName, startNum) 
{
	//레퍼런스
	var selectedLayers = getSelectedLayersIndex(activeDoc);

	// 백그라운드 레이어 해제
	if (selectedLayers[0] == 0) {
		selectedLayers.shift();
	}

	// 타입별로 레이어 선택 해제
	selectedLayers = Layer_selection_cancel(selectedLayers, mainDlg.NRPnl.NRLayerPnl.selectCancelLayerType);
	
	var newNumber = startNum;
	
	var len = selectedLayers.length;
	//위에서 아래로 이름 변경
	if (prefs.topToBottom) 
	{
		for (var i = 0; i < len; i++)
		{
			selectLayerByIndex( selectedLayers[i] );
			rename();
		}
	}
	//아래에서 위로 이름 변경
	else 
	{
		for (var i = len - 1; i >= 0; i--)
		{
			selectLayerByIndex( selectedLayers[i] );
			rename();
		}
	}
	
	// 레이어 이름을 변경
	function rename()
	{
		var index = Number(selectedLayers[i]);
		putLayerNameByIndex( index, beginName + newNumber.toString() );
		newNumber++;
		prefs.countFrom++;
	}
}


function toNumber( s ) 
{
	if( s == undefined || s == '') return NaN;
	if( s.constructor == Number ) reutrn s.valueOf();
	return Number( s.toString() );
}


function selectLayerByIndex(index, append) 
{
	var desc = new ActionDescriptor();
	var ref = new ActionReference();
	ref.putIndex(cTID('Lyr '), index);
	desc.putReference(cTID('null'), ref);
	if (append) 
	{
		desc.putEnumerated(sTID('selectionModifier'), sTID('selectionModifierType'), sTID('addToSelection'));
	}
	desc.putBoolean( cTID('MkVs'), false );
	executeAction(cTID('slct'), desc, DialogModes.NO);
}


function getLayerTypeByIndex(idx)
{
	var desc = getLayerDescriptorByIndex(idx);
	return desc.getEnumerationValue(sTID('layerSection'));
}


function getLayerDescriptorByIndex(idx) 
{
	var ref = new ActionReference();
	ref.putIndex(cTID('Lyr '), idx);
	return executeActionGet(ref);
}


function getLayerNameByIndex( idx ) 
{ 
    var ref = new ActionReference(); 
    ref.putProperty( charIDToTypeID("Prpr") , charIDToTypeID( "Nm  " )); 
    ref.putIndex( charIDToTypeID( "Lyr " ), idx );
    return executeActionGet(ref).getString(charIDToTypeID( "Nm  " ));; 
}


function putLayerNameByIndex( idx, name ) 
{
	if( idx == 0 ) return;
	var desc = new ActionDescriptor();	
	var ref = new ActionReference();
	ref.putIndex(cTID('Lyr '), idx);
	desc.putReference( charIDToTypeID("null"), ref );	
	
	var nameDesc = new ActionDescriptor();
	nameDesc.putString( charIDToTypeID("Nm  "), name );
	desc.putObject( charIDToTypeID("T   "), charIDToTypeID("Lyr "), nameDesc );
	
	executeAction( charIDToTypeID("setd"), desc, DialogModes.NO );
}


//디버그 멀티 라인 메시지
function Show_debug_msg(strAry)
{
	var str = '';
	for(var i = 0; i < strAry.length; i++)
	{
		str = str + '\n' + strAry[i];
	}
	alert(str);
}


//키 읽기 함수
function Show_obj_key(obj)
{
	//키 읽기
	var resultStr = this + '\n' ;
	for(_key in obj)
	{
		resultStr = resultStr + _key + '\n';
	}
	alert(resultStr);
}