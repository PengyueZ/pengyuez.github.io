<!-- <h3 id="research" style="margin: 2px 0px -15px;">Working Papers</h3> -->

<h3 id="research" style="margin: 2px 0px -15px;"></h3>

<div class="research">
<ol class="bibliography">

{% for link in site.data.research.main %}

<li>
<div class="pub-row">
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 0px;">
      <!-- <div class="title"><a>{{ link.title }}</a></div> -->
      <div class="title"><a href="{{ link.draft }}">{{ link.title }}</a></div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.authors or link.abstract %}
        <div class="author">
        {% if link.authors %} 
          {{ link.authors }}
        {% endif %}
              {% if link.draft %} 
           <a href="{{ link.draft }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="margin-right: 10px; font-size:15px;">Draft</a>
      {% endif %}
        {% if link.abstract %} 
          <button onclick="toggleAbstract({{link.id}}, this)" class="button abstract-button">[+] Abstract</button>
      <div id={{link.id}} style="display:none; width: 80%; margin: 10px 0 10px 0; background-color: #f0f6fc; padding: 15px; border-radius: 15px;">
      <p style="margin: 0;">
        {{ link.abstract }}
          </p>
      </div>

<script>
  function toggleAbstract(id, btn) {
    const abs = document.getElementById(id);
    const isHidden = abs.style.display === 'none';
  
    abs.style.display = isHidden ? 'block' : 'none';
    btn.textContent = isHidden ? '[-] Abstract' : '[+] Abstract';
  }
  </script>
        {% endif %}
        </div>
      {% endif %}
      {% if link.others %} 
        {{ link.others }}
      {% endif %}
      <div id="{{ link.id }}" class="panel" style="background-color: #F1F1F1; color: #666; padding: 10px;">
    {{ link.abstract }}
    </div>
    </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>


